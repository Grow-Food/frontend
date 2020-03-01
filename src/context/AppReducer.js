export default (state, action) => {
  switch(action.type) {
    case "SIGNIN_USER":
      return {...state, sidebar: {visible: action.payload}};
    default: return state;
  }
}