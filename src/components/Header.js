import { useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-fuchsia-300">
      <img className="w-28" src={LOGO_URL} />
      <div className="content-center">
        <ul className="flex">
          <li className="m-2 p-2">
            onlineStatus: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="m-2 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2 p-2">
            <Link>Cart</Link>
          </li>
          <li
            className="m-2 p-2 cursor-pointer"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
