import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // const searchBtn = screen.getByRole("button", { name: "Search" });
  // const cardsBefore = screen.getAllByTestId("resCard");
  // expect(cardsBefore.length).toBe(20);
  // console.log(searchBtn);
  // expect(searchBtn).toBeInTheDocument();
  // const searchInput = screen.getByTestId("searchInput");
  // fireEvent.change(searchInput, { target: { value: "Pizza" } });
  // fireEvent.click(searchBtn);
  // const cardsAfter = screen.getAllByTestId("resCard");
  //console.log(cards);
  // expect(cardsAfter.length).toBe(2);

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
   expect(cardsBeforeFilter.length).toBe(20);
  const filterBtn = screen.getByRole("button", { name: "Top Restaurants" });
  fireEvent.click(filterBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(4);
});
