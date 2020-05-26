import React, { Fragment } from "react";
import Card from "../card/card.component";

const CardList = ({ kittens }) => {
  return (
    <Fragment>
      {kittens.map((kitten, i) => {
        return <Card key={i} name={kitten.name} />;
      })}
    </Fragment>
  );
};

export default CardList;
