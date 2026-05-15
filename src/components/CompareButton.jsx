import { useCompare } from "../context/CompareContext.jsx";
import { useState } from "react";

function CompareButton({ food }) {
  const { isInCompare, addToCompare, removeFromCompare } = useCompare();
  const [loading, setLoading] = useState(false);

  const selected = isInCompare(food.id);

  async function handleClick() {
    try {
      setLoading(true)
      if(selected){
        removeFromCompare(food.id)

      } else {
        await addToCompare(food)
      }
    }

    catch (error){
     console.error('errore nel comparatore', error)
    } finally {
      setLoading(false)
    }
    
  }

  return (
    <button
      type="button"
      className={`btn ${selected ? "btn-success" : "btn-outline-success"}`}
      onClick={handleClick}
      disabled={loading}
    >
       {loading ? "Caricamento..." : selected ? "Nel confronto" : "Confronta"}
      
    </button>
  );
}

export default CompareButton;
