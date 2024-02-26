// useContext hook is required to use the created context (in our case userConext)
import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { useSelector } from "react-redux";
import cartLogo from "../assets/cart-icon-28337.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //Custom Hook
  const isOnline = useIsOnline();
  // take out user using use context hook and passing it userContext

  const statusColor = {
    color: isOnline ? "green" : "red",
  };

  // useSelector hook is required to subscribe the cart
  const itemsList = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <>
      <div className="title flex justify-between bg-[#0A0C0B] h-16  p-3">
        <a href="/">
          {/* data-testId="logo" way of writing id for testing  */}
          <img
            data-testid="logo"
            className="w-24 h-10"
            src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
            alt="logo"
          />
        </a>

        <div className="nav-items ">
          <ul className="flex text-[#E4AE74]  ">
            <li className="px-2 hover:text-[#e79339]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-2 hover:text-[#e79339]">
              <Link to={"/Contact"}>Contact</Link>
            </li>
            <li className="px-2 hover:text-[#e79339]">
              <Link to={"/AboutUs"}>About Us</Link>
            </li>
            <li className="px-2 hover:text-[#e79339]">
              <Link to={"/instamart"}>InstaMart</Link>
            </li>
            <li className="px-2 flex items-center hover:text-[#e79339]">
              <Link to={"/cart"} className="flex items-center">
                <img className="h-8 w-8" src={cartLogo} alt="cart" />
                <span
                  className="ml-1 font-bold text-white"
                  data-testid="check-cart"
                >
                  {itemsList.length}
                </span>
              </Link>
            </li>

            {/* data-testId="" way of writing id for testing  */}
            <li
              data-testid="OnlineStatus"
              className="px-4 "
              style={statusColor}
            >
              {isOnline ? "ONLINE" : "OFFLINE"}
            </li>
            {/* {console.log(user)} */}
            {/* place to display data (user.name) */}
            {isLoggedIn == true ? (
              <button
                className="LoginLogout hover:text-red-500"
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                {" "}
                Login{" "}
              </button>
            ) : (
              <button
                className="LoginLogout"
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                {" "}
                Logout{" "}
              </button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
