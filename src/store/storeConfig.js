import { legacy_createStore as createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    switch (action.type) {
      case "NUM_MIN_ALTERADO":
        return {
          ...state,
          min: action.payload,
        };
      case "NUM_MAX_ALTERADO":
        return {
          ...state,
          max: action.payload,
        };
      default:
        return {
          min: 7,
          max: 31,
        };
    }
  },
  nomes: function (state, action) {
    return ["Amanda", "Carol", "Ana", "Helloiza"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
