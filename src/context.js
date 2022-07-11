import React, { createContext, useState, useEffect } from "react";
import { products } from "./joker-services";

const Context = createContext();

function ContextProvider(props) {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => setAllServices(products), []);

  return (
    <Context.Provider
      value={{
        allServices,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
