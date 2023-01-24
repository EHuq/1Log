const initialState = {
  items: [
    {
      meal: "",
      name: "",
      calories: 0,
      id: 0,
    },
  ],
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [
          ...state.items,
          action.payload, // for now, we will define an action type later
        ],
        ...state,
      };
      break;
    case DELETE_ITEM:
      return {
        items: [
          ...state.items.filter((item) => {
            if (item.id !== action.payload.id) {
              return item;
            }
          }),
        ],
        ...state,
      };
      return;
    case UPDATE_ITEM:
      return {
        items: [
          ...state.items.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                ...action.payload,
              };
            }
          }),
          ...state.items,
        ],
        ...state,
      };
    default:
      return state;
      break;
  }
}
