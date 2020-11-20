import axios from "axios";
import contactsAction from "./contactsAction";
axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsAction.addContactsRequest());
  axios
    .post("/contacts", { name, number })
    .then((response) => {
      dispatch(contactsAction.addContactsSuccess(response.data));
    })
    .catch((error) => dispatch(contactsAction.addComtactsError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsAction.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsAction.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsAction.fetchComtactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsAction.removeContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsAction.removeContactsSuccess(id)))
    .catch((error) => contactsAction.removeComtactsError(error));
};

export default {
  addContact,
  fetchContacts,
  removeContact
};
