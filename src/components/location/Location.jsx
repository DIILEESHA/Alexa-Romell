import "./l.css";

const Location = () => {
  return (
    <div className="header_container ui">
      <div className="header_grid two">
        <div className="exact_date kk">
          <h2 className="date maha">location</h2>
        </div>
        <div className="header_sub ty">
          <p className="header_p">Saturday, November 8th, 2025</p>
        </div>
        <div className="header_sub jur">
          <div class="image-wrappers">
            <img
              src="https://i.imgur.com/A2O4bum.jpeg"
              alt=""
              className="r_img"
            />
          </div>

          {/* <button className="rsvp_btn"></button> */}
        </div>
        <div className="header_sub ty">
          <p className="header_p">
            61 W. Utah Ave STE 141
            <br />
            Las Vegas, Nevada, NV 89102
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
