import React, { useState } from "react";
import "./faq.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Modal, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import drinkmenu from "../../assets/bar.jpg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = drinkmenu;
    link.download = "wedding-drink-menu.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const faqs = [
    {
      question: "What is the dress code?",
      answer: (
        <>
          <p>Formal, all-black attire.</p>
          <p>
            <strong>Men:</strong> Black suit with a white or black dress shirt +
            neutral-toned tie.
          </p>
          <p>
            <strong>Women:</strong> Black floor-length gown, elegant cocktail
            dress, or dressy pantsuit. Patterns are welcome as long as the
            primary color is black.
          </p>
        </>
      ),
    },
    {
      question: "What time should I arrive?",
      answer: "Please arrive by 4:30 PM for the ceremony.",
    },
    {
      question: "Are children allowed?",
      answer:
        "Yes, but only if listed on your invitation (due to limited venue space).",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Due to space constraints, only those specifically named on your invitation are invited.",
    },
    {
      question: "Is the wedding indoors or outdoors?",
      answer: "Both the ceremony and reception will be held indoors.",
    },
    {
      question: "Will the ceremony and reception be at the same location?",
      answer:
        "Yes! There will be a 1.5-hour intermission between events while we reset the space and take photos.",
    },
    {
      question: "What should I do during the intermission?",
      answer: (
        <>
          <p>
            Explore nearby spots in the Arts District! Here are our top picks:
          </p>
          <p>
            <strong>Bars/Cafés:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://www.thedustlandbar.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dustland Bar
              </a>
            </li>
            <li>
              <a
                href="https://velveteenrabbitlv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Velveteen Rabbit
              </a>
            </li>
            <li>
              <a
                href="https://www.bungalowcoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bungalow Coffee
              </a>
            </li>
          </ul>
          <p>
            <strong>Food:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://www.soulbellybbq.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Soul Belly BBQ
              </a>
            </li>
            <li>
              <a
                href="https://goodpie.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Good Pie
              </a>
            </li>
            <li>
              <a
                href="https://www.estherslv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Esther's Kitchen
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Is there parking available?",
      answer: (
        <>
          <p>
            <strong>Yes!</strong>
          </p>
          <p>
            <strong>Main lot:</strong>{" "}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              1502 S. Commerce St.
            </a>
            (30 seconds from the venue, $2/hour via{" "}
            <a
              href="https://www.flowbirdapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flowbird App
            </a>
            ).
          </p>
          <p>
            <strong>Additional lots:</strong> 8 others within a 5-minute walk.
          </p>
          <p>
            <strong>Street parking:</strong> Available on Utah, Commerce, and
            Main St.
          </p>
        </>
      ),
    },
    {
      question: "Are Uber/Lyft/taxis accessible?",
      answer: "Yes—rideshares and taxis are easy to find near the venue.",
    },
    {
      question: "Does the venue have restrooms or outdoor space?",
      answer: (
        <>
          <p>Two private, ADA-accessible restrooms (men's and women's).</p>
          <p>
            A small outdoor patio with string lights (smoking permitted outside
            only).
          </p>
        </>
      ),
    },
    {
      question: "What's on the menu?",
      answer: (
        <>
          <p>
            <strong>Authentic Mexican fare!</strong>
          </p>
          <p>
            <strong>Tacos:</strong> Pollo (chicken), Carne Asada (steak), Al
            Pastor (pork).
          </p>
          <p>
            <strong>Sides:</strong> Rice, beans, Sonoran hot dog, ceviche, or
            quesadilla.
          </p>
          <p>
            <strong>Drinks:</strong> Horchata, aguas frescas, and full bar.
          </p>
        </>
      ),
    },
    {
      question: "Will there be alcohol?",
      answer:
        "Yes! We'll have an open bar (tab may run out; cash bar available afterward).",
    },
    {
      question: "Is smoking allowed?",
      answer: "Only outside—no vaping or smoking indoors.",
    },
    {
      question: "What time does the reception end?",
      answer: "The celebration wraps up at 11:00 PM.",
    },
    {
      question: "What airport should I fly into?",
      answer: (
        <a
          href="https://www.harryreidairport.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Harry Reid International Airport (LAS)
        </a>
      ),
    },
    {
      question: "Where should I stay?",
      answer: (
        <>
          <p>
            <strong>Here are our top picks:</strong>
          </p>
          <p>
            <strong>Luxury:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://www.waldorfastorialasvegas.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Waldorf Astoria
              </a>
            </li>
            <li>
              <a
                href="https://www.wynnlasvegas.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wynn
              </a>
            </li>
          </ul>
          <p>
            <strong>Budget-Friendly:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://www.stratospherehotel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                The STRAT
              </a>
            </li>
            <li>
              <a
                href="https://www.sahalasvegas.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sahara
              </a>
            </li>
          </ul>
          <p>
            <strong>Arts District Boutique:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://www.theenglishhotel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                The English Hotel
              </a>
            </li>
          </ul>
          <p>
            <strong>VRBO/Airbnb:</strong>{" "}
            <a
              href="https://www.vrbo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Search here
            </a>
          </p>
        </>
      ),
    },
    {
      question: "When is the RSVP deadline?",
      answer: "September 27, 2025 (6 weeks before the wedding).",
    },
    {
      question: "How do I RSVP?",
      answer:
        "Via our wedding website RSVP page or the instructions on your invitation.",
    },
    {
      question: "How can we support you?",
      answer:
        "Your presence is our gift! If you'd like to contribute, visit our registry.",
    },
    {
      question: "What's the Arts District like?",
      answer: (
        <>
          <p>
            A vibrant neighborhood full of murals, galleries, and local
            businesses. Read more in this{" "}
            <a
              href="https://www.cnn.com/travel/arts-district-las-vegas/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNN feature
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "View drink Menu",
      answer: (
        <>
          <p></p>
          <Button
            type="primary"
            onClick={showModal}
            style={{ marginTop: "10px" }}
          >
            Click to View Drink Menu
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="faq_container">
      <div className="faq_cover">
        <h2 className="faq_title">Frequently Asked Questions</h2>
      </div>
      <div className="faq_card_section">
        {faqs.map((faq, index) => (
          <div className="faq_sub_card" key={index}>
            <div className="faq_top" onClick={() => toggleAccordion(index)}>
              <div className="faq_top_t">
                <h2 className="faq_qs">{faq.question}</h2>
              </div>
              <div className="faq_top_t">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            <div className="line"></div>
            {activeIndex === index && (
              <div className="faq_ans">
                <div className="faq_ans_p">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Drink Menu Modal */}
      <Modal
        title="Wedding Drink Menu"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="download"
            icon={<DownloadOutlined />}
            onClick={handleDownload}
          >
            Download Menu
          </Button>,
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
        width={800}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={drinkmenu} // Updated to match your download URL
            alt="Drink Menu"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p style={{ marginTop: "20px" }}>
            Our curated selection of beverages for your enjoyment!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Faq;
