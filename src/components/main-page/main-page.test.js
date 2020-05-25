import { shallow } from "enzyme";
import React from "react";
import MainPage from "./main-page.component";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestKittens: jest.fn(),
    kittens: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters kittens correctly", () => {
  const mockProps2 = {
    onRequestKittens: jest.fn(),
    kittens: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "john",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterKittens()).toEqual([
    {
      id: 3,
      name: "John",
      email: "john@gmail.com",
    },
  ]);
});

it("filters kittens correctly 2", () => {
  const mockProps3 = {
    onRequestKittens: jest.fn(),
    kittens: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "john",
    isPending: false,
  };
  const filteredKittens = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterKittens()).toEqual([
    {
      id: 3,
      name: "John",
      email: "john@gmail.com",
    },
  ]);
});
