import characters_data from "./data/characters.json";
import { combineReducers } from "redux";
const characters = (state = characters_data, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      let characters = state.filter((item) => item.id !== action.payload);
      return characters;
    case "REMOVE_CHARACTER":
      console.log("characters");
      let newList = [
        ...state,
        characters_data.find((item) => item.id === action.payload)
      ];
      return newList;
    default:
      return state;
  }
};
const heros = (state = [], action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      let heros = [
        ...state,
        characters_data.find((item) => item.id === action.payload)
      ];
      return heros;

    case "REMOVE_CHARACTER":
      console.log("heros");
      let newList = state.filter((item) => item.id !== action.payload);
      return newList;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  characters,
  heros
});

export default rootReducer;
