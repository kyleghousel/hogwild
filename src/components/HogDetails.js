import React, { useState } from "react";

const HogDetails = ({ hog }) => {
  if (!hog) return null

  return (
    <div className="ui card">
      <div className="image">
        <img src={hog.image}/>
      </div>
      <div className="content">
        <a className="header">{hog.name}</a>
        <div className="description achievementText">
          {`Highest medal achieved: ${hog["highest medal achieved"]}`}
        </div>
      </div>
      <div className="extra content">
        <ul className="normal text">
          <li>{`Specialty: ${hog.specialty}`}</li>
          <li>{hog.greased ? "Greased!" : "Not greased :/"}</li>
          <li>{`Weight: ${hog.weight}`}</li>
        </ul>
      </div>
    </div>
  );
}

export default HogDetails;
