import itemReducer from "./item-reducer";

export default function foodReducer(state = {}, action) {
  return {
    items: itemReducer(state.items, action),
  };
}
// state system needs to be improved
