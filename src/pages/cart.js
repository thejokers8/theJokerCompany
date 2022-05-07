import React, { useContext } from "react";
import { Context } from "../context";
import CartItem from "../components/cart/CartItem";
import PaymentButton from "../components/cart/paymentForm";

function Cart() {
  const { allServices, emptyCart, cartItemsAmount } = useContext(Context);

  const subtotal = allServices.map((item) => item.amount * item.price);
  const initialValue = 0;
  const total = subtotal.reduce(
    (previousValue, nextValue) => previousValue + nextValue,
    initialValue
  );

  const cartItemElements = allServices
    .filter((services) => services.amount > 0)
    .map((item) => <CartItem key={item.id} item={item} />);
  const cartItemsToBuy = allServices.filter((services) => services.amount > 0);

  return (
    <main
      className={`cart-main flex flex-col justify-center mt-[5em] p-10 point3 ${
        cartItemsAmount === 0 && "h-[80vh]"
      }`}
    >
      <div>
        <div className="flex flex-col w-fit mx-auto ">
          <h1 className="title-projects font-bold mb-8">Check out</h1>
        </div>
        {cartItemElements.length > 0 ? (
          <div className="flex flex-col">
            <button
              className="inline-block mt-8 mb-8 px-6 py-2.5 bg-gray-800 text-white font-medium text-md leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg hover:text-green-600 hover:scale-105 transition duration-150 ease-in-out w-fit opacity-50 hover:opacity-90 self-end mb-4"
              onClick={emptyCart}
            >
              Empty Cart
            </button>
          </div>
        ) : (
          ""
        )}
        {cartItemElements}
        {cartItemElements.length > 0 ? (
          <p className="text-right text-2xl  tracking-wider font-bold text-green-600">
            Total:{" "}
            {total.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              currencyDisplay: "code",
            })}
          </p>
        ) : (
          ""
        )}
        <div className="order-button">
          {cartItemElements.length > 0 ? (
            <div className="flex flex-col items-center">
              <PaymentButton amount={total} cartItemsToBuy={cartItemsToBuy} />
            </div>
          ) : (
            <p className="text-center text-2xl font-bold mb-4">
              There are no items in your cart
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Cart;
