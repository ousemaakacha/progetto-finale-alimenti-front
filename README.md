# FoodCompare - Frontend React

SPA React in JavaScript con Bootstrap per il progetto finale Boolean.

## Funzionalità

- Lista alimenti con `title` e `category`
- Ricerca per titolo tramite API
- Filtro per categoria tramite API
- Ordinamento alfabetico per titolo o categoria, A-Z e Z-A
- Pagina dettaglio con proprietà estese
- Comparatore di 2 o più alimenti
- Preferiti sempre accessibili
- Persistenza preferiti in `localStorage`
- Debounce sulla ricerca
- Stati vuoti

## Avvio

```bash
npm install
npm run dev
```

Il frontend usa come default:

```txt
http://localhost:3000
```

Per cambiare URL backend, crea un file `.env`:

```env
VITE_API_URL=http://localhost:3000
```

## Backend

Nel pacchetto trovi anche una cartella `progetto-finale-alimenti-back` con:

- `types.ts`
- `database/food.json`

Copia questi file dentro il repo backend `progetto-finale-spec-frontend-back`.
