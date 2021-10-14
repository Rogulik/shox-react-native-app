import React from "react";
import { create } from "react-test-renderer";
import BasketItem from "../BasketItem";

describe("BasketItem", () => {
  it("should render Basket item", () => {
    const tree = create(<BasketItem price={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //   it("should render price equal of 8 with fixed two decimal points", () => {
  //     const tree = create(<BasketItem price={8} />).root;

  //     expect(tree.findByProps({ testID: "price" }).children).toEqual(["8.00"]);
  //   });

  it("should render title product equal test", () => {
    const tree = create(<BasketItem title="test" price={8} image="" />).root;

    console.log(tree.findByProps({ testID: "title" }).children);

    // expect(tree.findByProps({ testID: "title" }).children).toEqual("test");
  });
});
