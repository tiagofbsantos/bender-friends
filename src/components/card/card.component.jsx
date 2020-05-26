import React from "react";
import "./card.styles.css";

const Card = ({ name }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        className="kittenPic"
        alt={`${name} kitten`}
        src={`https://robohash.org/set_set4/bgset_bg1/${name}`}
      />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
