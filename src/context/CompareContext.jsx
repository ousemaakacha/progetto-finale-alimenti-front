import { createContext, useContext, useState } from "react";
import { getFoodById } from "../api/foods";

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [compareItems, setCompareItems] = useState([]);

  async function addToCompare(food) {
    // controllo se aliemnto e' valido
    if (!food || !food.id) return;

    // controllo se esiste nel comparatore o no
    const exists = compareItems.some((item) => item.id === food.id);

    if (exists) return;

    // rceupero il dettaglio completo
    const fullFood = await getFoodById(food.id);

    //aggiorno lo state
    setCompareItems((prev) => [...prev, fullFood])
    
  }

  // rimoxione dal compare
  function removeFromCompare(id) {
    setCompareItems((prev) => prev.filter((item) => item.id !== id));
  }
  

  //svuoto il compare
  function clearCompare() {
    setCompareItems([]);
  }
  
  // controllo se ce gia nel compare
  function isInCompare(id) {
    return compareItems.some((item) => item.id === id);
  }


  return (
    <CompareContext.Provider
      value={{ 
        compareItems, 
        addToCompare, 
        isInCompare, 
        removeFromCompare, 
        clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  return useContext(CompareContext);
}
