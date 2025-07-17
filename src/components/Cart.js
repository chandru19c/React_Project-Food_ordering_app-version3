import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" w-9/12 mx-auto">
      <div className="text-center m-2 p-2">
        <h1 className="font-extrabold">MENU</h1>
        <button
          className="bg-amber-500 p-1 rounded m-2 font-bold cursor-pointer"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        {cartItems.length === 0 ? (
          <h1>Cart is empty. Add items to the cart!</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};
export default Cart;
