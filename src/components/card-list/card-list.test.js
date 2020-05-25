import { shallow } from "enzyme";
import React from "react";
import CardList from "./card-list.component";

it("expect to render CardList component", () => {
  const mockKittens = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnJohn",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList kittens={mockKittens} />)).toMatchSnapshot();
});
