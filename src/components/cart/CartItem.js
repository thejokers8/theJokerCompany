import React, { useContext } from "react";
import { Context } from "../../context";
import PropTypes from "prop-types";
import useHover from "../../hooks/useHover";

function CartItem({ item }) {
  const { hovered, enter, leave } = useHover();
  const { removeFromCart, addToCart, removeElementFromCart } =
    useContext(Context);

  return (
    <div className="grid grid-cols-11 gap-x-3 justify-between mb-4">
      <div
        onMouseEnter={enter}
        onMouseLeave={leave}
        onClick={() => removeElementFromCart(item.id)}
        className="cart-erase-contain flex flex-col items-center justify-center border-2 col-span-1 border-cyan-900 rounded-[1em] cursor-pointer hover:scale-[1.05]"
      >
        <i
          className={`cart-erase w-fit text-4xl ${
            hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
          }`}
        ></i>
      </div>
      <div className=" cart-request col-start-2 col-end-12 flex justify-between items-center border-2 border-cyan-900 rounded-[1em] hover:scale-[1.02] p-2">
        <div className="cart-union ml-5 flex items-center">
          <h1 className="cart-service font-bold border min-w-[100px] max-w-[100px] text-center uppercase">
            {item.name}
          </h1>
          <img
            className="cart-image rounded-full ml-12"
            src={item.imageSrc}
            width="100px"
          />
        </div>
        <p className="cart-text-price font-bold text-green-600 tracking-wider text-xl">
          {item.price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            currencyDisplay: "code",
          })}
        </p>
        <div className="cart-item flex items-center justify-center text-xl">
          <i
            onClick={() => removeFromCart(item.id)}
            className="ri-indeterminate-circle-line mx-5 cursor-pointer hover:scale-110"
          ></i>
          <div className="font-extrabold mx-5">
            {item.amount} {item.amount <= 1 ? "H" : "Hrs"}
          </div>
          <i
            onClick={() => addToCart(item.id)}
            className="ri-add-circle-line mx-5 cursor-pointer hover:scale-110"
          ></i>
        </div>
      </div>
    </div>
  );
}

// CartItem.propTypes = {
//   item: PropTypes.shape({
//     url: PropTypes.string.isRequired,
//   }),
// };

export default CartItem;
