import React from "react";
import "./r.css";
import { Link } from "react-router-dom";
const Registry = () => {
  return (
    <div className="registry_container">
      <div className="r_grid">
        <div className="r_sub">
          <h2 className="r_title">Support the bride and groom</h2>
          <div class="image-wrapper">
            <img
              src="https://i.imgur.com/SbfGgFA.jpeg"
              alt=""
              className="r_img"
            />
          </div>

          <p className="jio">
            While your presence at our wedding is the greatest gift, if you wish
            to share in our joy through a gift, please visit our registry.
          </p>
          <button className="rsvp_btn">
            <a
              href="https://www.zola.com/registry/alexaandromell"
              style={{ color: "#fff", textDecoration: "none" }}
              target="_blank"
            >
              registry
            </a>
          </button>
        </div>
        <div className="r_sub">
          <h2 className="r_title">What to wear</h2>
          <div class="image-wrapper">
            <img
              src="https://i.imgur.com/aODQXMP.jpeg"
              alt=""
              className="r_img"
            />
          </div>
          <p className="jio">
            We’ve put together a style guide to help you find inspiration and
            feel confident in what you wear as we celebrate this special day of
            love together.
          </p>
          <button className="rsvp_btn">
            <Link
              to="/dress"
              style={{
                color: "#fff",
                background: "#000",
                textDecoration: "none",
              }}
            >
           Dress Code
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registry;
