const initialState: IUser = {
  id: 0,
  image: "",
  username: "",
  email: "",
  tokenJWT: ""
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE":
      return state;
    default:
      return state;
  }
};

export default userReducer;
