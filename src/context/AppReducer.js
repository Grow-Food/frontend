export default (state, action) => {
  switch(action.type) {
    case "SET_SIDEBAR_VISIBLE":
      return {...state, sidebar: {visible: action.payload}};
    default: return state;
  }
}