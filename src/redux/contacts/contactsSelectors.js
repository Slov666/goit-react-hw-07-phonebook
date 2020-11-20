import { createSelector } from "@reduxjs/toolkit";
const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);

const getItemByID = (state, id) => {
  const contacts = getContacts(state);
  return contacts.find((item) => item.id === id);
};
export default {
  getContacts,
  getFilter,
  getVisibleContacts,
  getItemByID,
};
