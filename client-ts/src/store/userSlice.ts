import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../components/Types/User";

const getInitialState = (): UserState => {
  const localUser = JSON.parse(localStorage.getItem("blog-user")!) || null;

  return localUser
    ? { user: localUser.user, token: localUser.token }
    : { user: null, token: "" };
};

const userSlice = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("blog-user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem("blog-user");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
