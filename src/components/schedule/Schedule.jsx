import React from "react";
import "./sc.css";
const Schedule = () => {
  return (
    <div className="master">
      <div className="schedule_container">
        <div className="dolly">
          <h2 className="sc_title">Here's a sneak peek of</h2>

          <h1 className="sc">our special day's schedule</h1>

          <div className="sc_grid">
            <div className="sc_sub">
              <h2 className="sc_time">4:00 PM</h2>
              <h2 className="event">Ceremony</h2>
            </div>
            <div className="sc_sub">
              <h2 className="sc_time">5:00 PM</h2>
              <h2 className="event">cocktail</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time">6:30 PM</h2>
              <h2 className="event">dinner</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time">10:00 PM</h2>
              <h2 className="event">dancing & fireworks</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
