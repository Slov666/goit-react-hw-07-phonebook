import { createAction } from "@reduxjs/toolkit";

const addContactsRequest = createAction("contact/addRequest");
const addContactsSuccess = createAction("contact/addSuccess");
const addComtactsError = createAction("contact/addError");

const fetchContactsRequest = createAction("contact/fetchRequest");
const fetchContactsSuccess = createAction("contact/fetchSuccess");
const fetchComtactsError = createAction("contact/fetchError");

const removeContactsRequest = createAction("contact/removeRequest");
const removeContactsSuccess = createAction("contact/removeSuccess");
const removeComtactsError = createAction("contact/removeError");

const filter = createAction("type/filter");

export default {
  addContactsRequest,
  addContactsSuccess,
  addComtactsError,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchComtactsError,

  removeContactsRequest,
  removeContactsSuccess,
  removeComtactsError,

  filter,
};
