import { cloneDeep } from "lodash-es";

const ACTIONS = {
  SPLITE_BESTMATCH: "SPLITE_BESTMATCH",
  SPLITE_NEWEST: "SPLITE_NEWEST",
  SPLITE_PRICE: "SPLITE_PRICE",
  SPLITE_PRICE_VERTICAL: "SPLITE_PRICE_VERTICAL",
  INITIAL_RESULTS: "INITIAL_RESULTS",
};

const ResultsReducer = (state, action) => {
  let results = cloneDeep(state.results);
  let spliter = state.spliter;
  switch (action.type) {
    case ACTIONS.SPLITE_BESTMATCH: {
      results.sort((a, b) => a.match - b.match);
      spliter = "Best Match";
      break;
    }
    case ACTIONS.SPLITE_NEWEST: {
      results.sort((a, b) => b.time - a.time);
      spliter = "Newest";
      break;
    }
    case ACTIONS.SPLITE_PRICE: {
      results.sort((a, b) => a.price - b.price);
      spliter = "Price - Low To High";
      break;
    }
    case ACTIONS.SPLITE_PRICE_VERTICAL: {
      results.sort((a, b) => b.price - a.price);
      spliter = "Price - High To Low";
      break;
    }
    case ACTIONS.INITIAL_RESULTS: {
      results = action.results;
      break;
    }
    default: {
      break;
    }
  }
  return { ...state, results, spliter };
};

export default ResultsReducer;
