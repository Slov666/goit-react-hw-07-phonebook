import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";
import style from "./App.module.css";
import animate from "./animate.module.css";
import contactsAction from "../../redux/contacts/contactsAction";
import contactsOperations from "../../redux/contacts/contactsOperations";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Notifications from "../Notifications/Notifications";

const mapDispatchToProps = {
  onFetchTasks: contactsOperations.fetchContacts,
  onCheckContact: contactsAction.getLocalStorage,
};
class App extends Component {
  state = {
    contactExist: false,
  };
  openModal = () => {
    this.setState({ contactExist: true });
    setTimeout(() => this.setState({ contactExist: false }), 3000);
  };

  componentDidMount() {
    this.props.onFetchTasks()
  }

  render() {
    const { contactExist } = this.state;
    const { container, title } = style;
    return (
      <section className={container}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={animate}
          unmountOnExit
        >
          <h2 className={title}>Phonebook</h2>
        </CSSTransition>
        <CSSTransition
          classNames={animate}
          in={contactExist}
          timeout={250}
          unmountOnExit
        >
          <Notifications />
        </CSSTransition>

        <ContactForm openModal={this.openModal} />
        <h2 className={title}>Contacts</h2>
        <ContactList />
        <Filter />
      </section>
    );
  }
}
export default connect(null, mapDispatchToProps)(App);
App.propTypes = {
  onCheckContact: PropTypes.func,
  onFetchTasks: PropTypes.func,
};
