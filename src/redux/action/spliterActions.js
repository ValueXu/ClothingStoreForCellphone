const ACTIONS = {
  SPLITE_BESTMATCH: "SPLITE_BESTMATCH",
  SPLITE_NEWEST: "SPLITE_NEWEST",
  SPLITE_PRICE: "SPLITE_PRICE",
  SPLITE_PRICE_VERTICAL: "SPLITE_PRICE_VERTICAL",
  INITIAL_RESULTS: "INITIAL_RESULTS",
};

const bestMatch = () => {
  return { type: ACTIONS.SPLITE_BESTMATCH };
};

const newest = () => {
  return { type: ACTIONS.SPLITE_NEWEST };
};

const priceLowToHigh = () => {
  return { type: ACTIONS.SPLITE_PRICE };
};

const priceHighToLow = () => {
  return { type: ACTIONS.SPLITE_PRICE_VERTICAL };
};

const initialResults = (results) => {
  return { type: ACTIONS.INITIAL_RESULTS, results };
};

export { bestMatch, newest, priceLowToHigh, priceHighToLow, initialResults };
