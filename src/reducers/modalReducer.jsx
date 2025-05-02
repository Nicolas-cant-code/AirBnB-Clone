const initialState = {
  openClose: "closed",
  content: "",
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
        openClose: "closed",
        content: "",
      };
    default:
      return state;
  }
};
