const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

// fuznione dove recupero gli alimenti
export async function getFoods({ search = "", category = "" } = {}) {

  // URLSERACH per la creazione delle queary string
  const params = new URLSearchParams();


  // check per la search 
  if (search.trim()) params.append("search", search.trim());
  // check tramite categoria
  if (category) params.append("category", category);

  const queryString = params.toString();

  // url fianle per la chaiamata api
  const url = `${BASE_URL}/foods${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Errore durante il caricamento degli alimenti.");
  }

  // converto i dati json 
  const result = await response.json();


  // prego l'onnipotente che funzioni....
  console.log("risposta backend:", result);

  return result.data || result.food || result.item || result;
}


// funzione per dettaglio completo
export async function getFoodById(id) {

  // chiamata dettaglio
  const response = await fetch(`${BASE_URL}/foods/${id}`);

  if (!response.ok) {
    throw new Error("Alimento non trovato.");
  }

  const result  = await response.json();

  console.log("risposta backend:", result);

  return result.data || result.food || result.item || result;
  
}
