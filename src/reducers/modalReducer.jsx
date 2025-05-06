const initialState = {
  openClose: "closed",
  content: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        openClose: "open",
        content: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        openClose: "close",
        content: null,
      };
    default:
      return state;
  }
};
