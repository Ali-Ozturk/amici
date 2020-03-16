import { combineReducers } from "redux";
import user from "./reducers/user";
import employees from "./reducers/employees";
import locale from "./reducers/locale";
import formErrors from "./reducers/formErrors";

export default combineReducers({
  user,
  employees,
  locale,
  formErrors
});
