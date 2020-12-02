import React from "react";
import myPhoto from "../../img/me.jpg";

export default () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Hi</h2>
          </div>
          <div className="hide">
            <h2>
              My name is <span>Pavel</span>
            </h2>
          </div>
          <div className="hide">
            <h2>I'am Frontend Developer</h2>
          </div>
          <p>
            Contact me if you need a promising developer with a desire to
            constantly develop.
          </p>
          <button>CV</button>
        </div>
      </div>
      <div className="image">
        <img src={myPhoto} alt="myPhoto" />
      </div>
    </div>
  );
};
