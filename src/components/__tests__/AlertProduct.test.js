import React from "react";
import { create } from "react-test-renderer";
import AlertProduct from "../AlertProduct";

describe("AlertProduct", () => {
  it("should render alert", () => {
    const tree = create(<AlertProduct />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render alert with red background color", () => {
    const tree = create(
      <AlertProduct propsContainerStyles={{ backgroundColor: "red" }} />
    ).toJSON();
    expect(tree.props.style.backgroundColor).toEqual("red");
  });
  it("It should render with the text test", () => {
    const tree = create(<AlertProduct text="test" />).root;
    expect(tree.findByType("Text").props.children).toBe("test");
  });
});
