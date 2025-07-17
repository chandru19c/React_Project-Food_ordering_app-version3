import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  beforeAll(() => {
    // console.log("before all");
  });

  beforeEach(() => {
    //console.log("before each");
  });

  afterAll(() => {
    //console.log("after all");
  });
  afterEach(() => {
    //console.log("after each");
  });
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button in contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("should load input in contact us component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("should load input in contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(2);
  });
});
