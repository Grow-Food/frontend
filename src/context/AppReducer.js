export default (state, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      const { email, auth_level, accessToken, refreshToken } = action.payload;
      return {
        ...state,
        user: { email, authLevel: auth_level, accessToken, refreshToken }
      };
    default:
      return state;
  }
};
