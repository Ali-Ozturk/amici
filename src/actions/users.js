import { USER_FETCHED } from "../types";
import { userLoggedIn } from "./auth";
import api from "../api";

export const userFetched = user => ({
  type: USER_FETCHED,
  user
});

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.amiciJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const fetchCurrentUser = () => dispatch =>
  api.user.fetchCurrentUser().then(user => dispatch(userFetched(user)));
