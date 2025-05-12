import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_grid">
        <div className="exact_date">
          <h2 className="date">26 · 06 · 2026</h2>
        </div>
        <div className="header_sub ty">
          <img
            alt=""
            src="https://i.imgur.com/5uXiCmZ.jpeg"
            className="header_img nasiya"
          />
        </div>
        <div className="header_sub jur">
          <img
            src="https://i.imgur.com/YtJeSGg.jpeg"
            alt=""
            className="header_img pasiya"
          />

          <p className="header_p">
            Join us as we embark on a journey of love, joy, and eternal
            happiness.
          </p>
        </div>
        <div className="header_sub ty">
          <img
            src="https://i.imgur.com/TXUUN3z.jpeg"
            alt=""
            className="header_img nasiya"
          />
        </div>
      </div>

      <div className="naughty">
        <div className="naughty_sub">
          <img
            src="https://i.imgur.com/5uXiCmZ.jpeg"
            alt=""
            className="naughty_img"
          />
        </div>
        <div className="naughty_sub">
          <img
            src="https://i.imgur.com/TXUUN3z.jpeg"
            alt=""
            className="naughty_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
