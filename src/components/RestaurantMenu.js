import { useState, useEffect } from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length == 0) return <Shimmer />;

  //console.log(resMenu);
  const { name, cuisines, costForTwoMessage } = resMenu[2]?.card?.card?.info;
  const { itemCards } =
    resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //if (itemCards.length == 0) return <Shimmer />;
  // console.log(itemCards);

  return (
    <div className="text-center p-2 m-2">
      <h1 className="font-extrabold m-1 p-1">{name}</h1>
      <h3 className="font-bold m-1 p-1">
        {cuisines} - {costForTwoMessage}
      </h3>
      <h1 className="font-extrabold m-1 p-1">Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
