import React from "react";

const Card = ({ name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt={`${name} kitten`}
        src={`https://robohash.org/set_set4/bgset_bg1/${name}?size=200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
