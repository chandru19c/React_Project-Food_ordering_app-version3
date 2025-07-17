import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_NAME);
    },
  });
});

it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <RestaurantMenu />
          <Header />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Late Night Cravings(8)");
  fireEvent.click(accordionHeader);

  const foodItem = screen.getAllByTestId("foodItem");
  expect(foodItem.length).toBe(8);
  const addBtn = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtn[0]);
  const cartItem1 = screen.getByText("Cart-(1 items)");
  expect(cartItem1).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  const cartItem2 = screen.getByText("Cart-(2 items)");
  expect(cartItem2).toBeInTheDocument();

  //search for cart text in header
  const cartLink = screen.getByText(/Cart/);
  fireEvent.click(cartLink);
  expect(screen.getAllByTestId("foodItem").length).toBe(10);
  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));
  expect(screen.getAllByTestId("foodItem").length).toBe(8);
  expect(
    screen.getByText("Cart is empty. Add items to the cart!")
  ).toBeInTheDocument();
});
