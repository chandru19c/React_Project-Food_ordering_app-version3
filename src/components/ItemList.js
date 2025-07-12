import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  //console.log(items);
  const dispatch = useDispatch();
  const hangleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const cartItems = useSelector((store) => store.cart.items);
 
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between m-2 p-2 bg-gray-50"
        >
          <div className="w-10/12 text-left">
            <span>{item.card.info.name}</span>
            <span>{item.card.info.description}</span>
          </div>
          <div className="w-2/12">
            <button
              className="bg-lime-600 p-1 m-1 absolute cursor-pointer"
              onClick={()=>hangleAddItem(item)}
            >
              Add+
            </button>
            <img className="w-36" src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
