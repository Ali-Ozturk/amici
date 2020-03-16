import React from "react";
import ReactDOM from "react-dom";
import { Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./rootReducer";
import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess
} from "./actions/users";
import { localeSet } from "./actions/locale";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import rootSaga from "./rootSaga";
import history from "./history";

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga);

if (localStorage.amiciJWT) {
  setAuthorizationHeader(localStorage.amiciJWT);
  store.dispatch(fetchCurrentUserRequest());
} else {
  store.dispatch(fetchCurrentUserSuccess({}));
}

if (localStorage.amiciLang) {
  store.dispatch(localeSet(localStorage.amiciLang));
}

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
