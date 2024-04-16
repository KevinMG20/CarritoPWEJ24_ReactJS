import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import NavBar from "../NavBar/NavBar";

import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);
  return (
    <>
      <NavBar />
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-message-center">Your Cart is Empty</h2>
      )};
    </>
  );
  
  /* return cart.length > 0 ? (
    <>
      <NavBar />
      <CartElements />
      <CartTotal />
    </>
  ) : (
    <h2 className="cart-message-center">Your Cart is Empty</h2>
  );
}; */

};

export default CartContent