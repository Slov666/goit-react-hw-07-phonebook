import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./contactsAction";

const addContact = (state, action) => {
  const contact = action.payload;
  return [...state, contact];
};
const removeContact = (state, { payload }) => {
  return state.filter((item) => item.id !== payload);
};

const contactReducer = createReducer([], {
  [contactsAction.fetchContactsSuccess]: (state, { payload }) => payload,
  [contactsAction.addContactsSuccess]: addContact,
  [contactsAction.removeContactsSuccess]: removeContact,
});

const filterReducer = createReducer("", {
  [contactsAction.filter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsAction.fetchContactsRequest]: () => true,
  [contactsAction.fetchContactsSuccess]: () => false,
  [contactsAction.fetchComtactsError]: () => false,
  [contactsAction.addContactsRequest]: () => true,
  [contactsAction.addContactsSuccess]: () => false,
  [contactsAction.addComtactsError]: () => false,
  [contactsAction.removeContactsRequest]: () => true,
  [contactsAction.removeontactsSuccess]: () => false,
  [contactsAction.removeComtactsError]: () => false,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactsAction.addContact.type:
//       return [...state, payload.item];
//     case contactsAction.removeContact.type:
//       return state.filter((item) => item.id !== payload);
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items: contactReducer,
  filter: filterReducer,
  loading,
});
