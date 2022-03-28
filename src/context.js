import React, { createContext, useState, useEffect } from "react";
import { products } from "./joker-services";

const Context = createContext();

function ContextProvider(props) {
  const [allServices, setAllServices] = useState([]);
  const [cartItemsAmount, setCartItemsAmount] = useState(0);

  useEffect(() => setAllServices(products), []);

  const addToCart = (id) => {
    setAllServices((prevService) =>
      prevService.map((service) =>
        service.id === id ? { ...service, amount: service.amount + 1 } : service
      )
    );
  };

  const removeFromCart = (id) => {
    setAllServices((prevService) =>
      prevService.map((service) =>
        service.id === id
          ? {
              ...service,
              amount: service.amount === 0 ? 0 : service.amount - 1,
            }
          : service
      )
    );
  };

  const emptyCart = () => {
    setAllServices(
      allServices.map((service) => ({
        ...service,
        amount: 0,
      }))
    );
    setCartItemsAmount(0);
  };

  const removeElementFromCart = (id) => {
    setAllServices((prevService) =>
      prevService.map((service) =>
        service.id === id
          ? {
              ...service,
              amount: 0,
            }
          : service
      )
    );
  };

  useEffect(() => {
    setCartItemsAmount(allServices.filter((elem) => elem.amount > 0).length);
  }, [addToCart, removeFromCart, removeElementFromCart]);

  return (
    <Context.Provider
      value={{
        allServices,
        cartItemsAmount,
        emptyCart,
        addToCart,
        removeFromCart,
        removeElementFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
