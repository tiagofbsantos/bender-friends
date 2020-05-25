import React, { Fragment } from "react";
import Card from "../card/card.component";

const CardList = ({ kittens }) => {
  return (
    <Fragment>
      {kittens.map((kitten, i) => {
        return (
          <Card
            key={i}
            id={kitten.id}
            name={kitten.name}
            email={kitten.email}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
