import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({
  data,
  showItem,
  setShowIndex,
  showIndex,
  index,
}) => {
  //const [showItem, setShowItem] = useState(false);
  //console.log(showIndex);
  const handleShowIem = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  //console.log(data);
  return (
    <div className="bg-gray-100 w-9/12 mx-auto m-2 p-2">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleShowIem}
      >
        <span className="font-extrabold">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
