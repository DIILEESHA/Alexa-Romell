// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Modal, Form, message, Card, Spin, Result, Tag } from 'antd';
import { DownloadOutlined, LockOutlined } from '@ant-design/icons';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import * as XLSX from 'xlsx';

const AdminDashboard = () => {
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(true);

  const ADMIN_PASSWORD = "123"; // Change this

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
      render: (attendance) => (
        <Tag color={attendance === 'accept' ? 'green' : 'red'}>
          {attendance === 'accept' ? 'Accepting' : 'Declining'}
        </Tag>
      ),
      filters: [
        { text: 'Accepting', value: 'accept' },
        { text: 'Declining', value: 'decline' },
      ],
      onFilter: (value, record) => record.attendance === value,
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      render: (text) => text || 'No message',
    },
    {
      title: 'Submitted At',
      dataIndex: 'submittedAt',
      key: 'submittedAt',
      render: (date) => new Date(date).toLocaleString(),
      sorter: (a, b) => new Date(a.submittedAt) - new Date(b.submittedAt),
    },
  ];

  useEffect(() => {
    if (isAuthenticated) {
      fetchRsvps();
    }
  }, [isAuthenticated]);

  const fetchRsvps = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'rsvps'));
      const rsvpData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRsvps(rsvpData);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
      message.error('Failed to fetch RSVPs');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      message.success('Authentication successful');
    } else {
      message.error('Incorrect password');
    }
  };

  const exportToExcel = () => {
    const exportData = rsvps.map(rsvp => ({
      'Full Name': rsvp.fullName,
      'Attendance': rsvp.attendance === 'accept' ? 'Accepting' : 'Declining',
      'Message': rsvp.message || 'None',
      'Submitted At': new Date(rsvp.submittedAt).toLocaleString()
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'RSVPs');
    XLSX.writeFile(workbook, 'wedding_rsvps.xlsx');
  };

  const filteredData = rsvps.filter(rsvp =>
    Object.values(rsvp).some(
      value =>
        value &&
        value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  if (!isAuthenticated) {
    return (
      <Modal
        title="Admin Authentication"
        visible={showPasswordModal}
        onCancel={() => setShowPasswordModal(false)}
        footer={null}
        closable={false}
      >
        <Form onFinish={handlePasswordSubmit}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter the password' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      <Card
        title="Wedding RSVP Dashboard"
        extra={
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={exportToExcel}
          >
            Export to Excel
          </Button>
        }
      >
        <div style={{ marginBottom: '16px' }}>
          <Input.Search
            placeholder="Search RSVPs..."
            allowClear
            enterButton
            onSearch={handleSearch}
            style={{ width: '300px' }}
          />
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <Spin size="large" />
          </div>
        ) : rsvps.length === 0 ? (
          <Result
            status="404"
            title="No RSVPs Found"
            subTitle="There are no RSVPs submitted yet."
          />
        ) : (
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="id"
            bordered
            size="middle"
            scroll={{ x: 'max-content' }}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '50', '100'],
            }}
          />
        )}
      </Card>
    </div>
  );
};

export default AdminDashboard;