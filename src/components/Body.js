import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import { OpenedRestaurant } from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardOpened = OpenedRestaurant(RestaurantCard);
  useEffect(() => {
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  //if (listOfRestaurant.length === 0) return <Shimmer />;

  if (onlineStatus === false) return <h1>Loading...</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <button
          className="mt-2 p-2 bg-orange-500 m-2 rounded-xl cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          Top Restaurants
        </button>
        <input
          className="mt-2 p-2 bg-orange-500 m-2 rounded-xl cursor-pointer"
          text={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="mt-2 p-2 bg-orange-500 m-2 rounded-xl cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-container flex flex-wrap">
        {filteredListOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardOpened resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
