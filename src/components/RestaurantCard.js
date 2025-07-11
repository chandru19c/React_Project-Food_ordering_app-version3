import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="restaurant-card text-center shadow-amber-950 shadow-2xl w-52 h-72 m-2 p-2 rounded-xl">
      <img
        className="h-24 object-cover w-full object-center rounded-xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h1 className="font-extrabold mt-2">{name}</h1>
      <h2 className="font-bold">{cuisines.join(", ")}</h2>
      <h2 className="font-bold">{avgRating} Rating</h2>
      <h2 className="font-bold">{loggedInUser.name}</h2>
    </div>
  );
};

export default RestaurantCard;
