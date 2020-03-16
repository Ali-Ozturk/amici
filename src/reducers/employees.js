import { createSelector } from "reselect";

export default function employees(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export const employeesHashSelector = state => state.employees;

export const employeesSelector = createSelector(employeesHashSelector, hash =>
  Object.values(hash)
);
