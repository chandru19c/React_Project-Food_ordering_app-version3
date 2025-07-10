import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResMenu(json.data.cards);
  };
  return resMenu;
};

export default useRestaurantMenu;
