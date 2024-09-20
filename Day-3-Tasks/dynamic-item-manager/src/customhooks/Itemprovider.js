import React,{ useReducer,useEffect,createContext } from "react";
import itemReducer from "./ItemReducer";

export const ItemContext = createContext();


const ItemProvider = ({ children }) => {
    const [items, dispatch] = useReducer(itemReducer, [], () => {
      const localData = localStorage.getItem('items');
      return localData ? JSON.parse(localData) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
      console.log('Items updated:', items);
    }, [items]);
  
    return (
      <ItemContext.Provider value={{ items, dispatch }}>
        {children}
      </ItemContext.Provider>
    );
  };

  export default ItemProvider;