import ResultsReducer from "../reducer/ResultsReducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initeValues = () => {
  let results = [];
  for (let i = 0; i < 315; i++) {
    let item = {};
    item.price = parseInt(Math.random() * 300);
    item.beforePrice = parseInt(item.price * 1.5);
    item.imgSrc = `/assests/${(i % 4) + 1}.jpg`;
    item.time =
      Date.now() - parseInt(Math.random() * 1000 * 60 * 60 * 24 * 31 * 3);
    item.match = parseInt(Math.random() * 100);
    results.push({ ...item, title: "Product Title", id: i });
  }
  return {
    spliter: "Best Match",
    results: results.sort((a, b) => b.match - a.match),
  };
};

export default createStore(
  ResultsReducer,
  initeValues(),
  // composeWithDevTools()
);
