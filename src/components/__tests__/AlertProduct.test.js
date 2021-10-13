import React from "react";
import { create } from "react-test-renderer";
import AlertProduct from "../AlertProduct";

describe("AlertProduct", () => {
  it("should render alert with red background color", () => {
    const tree = create(
      <AlertProduct propsContainerStyles={{ backgroundColor: "red" }} />
    ).toJSON();
    expect(tree).toHaveStyle("background-color: red");
  });
  // it("should render zoom in button", () => {
  //   render(
  //     <KDSTheme>
  //       <ButtonKDS isIcon={true} text="Zoom In" type="white" />
  //     </KDSTheme>
  //   );
  //   const buttonElement = screen.getByText("Zoom In");
  //   expect(buttonElement).toBeInTheDocument();
  // });
  // it("should render white button", () => {
  //   render(
  //     <KDSTheme>
  //       <ButtonKDS isIcon={false} text="Zoom In" type="white" />
  //     </KDSTheme>
  //   );
  //   const buttonElement = screen.getByText("Zoom In");
  //   expect(buttonElement).toHaveStyle("background-color:#fff");
  // });
  // it("should render button with icon", () => {
  //   render(
  //     <KDSTheme>
  //       <ButtonKDS isIcon={true} text="Zoom In" type="white" />
  //     </KDSTheme>
  //   );
  //   const buttonElement = screen.getByText("Zoom In");
  //   const graphicElement = screen.getByTestId("magnifier-icon");
  //   expect(buttonElement).toContainElement(graphicElement);
  // });
  // it("should render success button", () => {
  //   render(
  //     <KDSTheme>
  //       <ButtonKDS isIcon={true} text="Zoom In" type="large" />
  //     </KDSTheme>
  //   );
  //   const buttonElement = screen.getByText("Zoom In");
  //   expect(buttonElement).toHaveStyle("background-color:rgb(71, 176, 75)");
  // });
});
