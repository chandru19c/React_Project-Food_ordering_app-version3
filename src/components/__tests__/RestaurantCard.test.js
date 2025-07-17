import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
it("should load Restaurant card component with props data ", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
