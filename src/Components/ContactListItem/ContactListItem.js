import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsOperations from "../../redux/contacts/contactsOperations";
import style from "./ContactListItem.module.css";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

function ContactListItem({ name, number, onRemove }) {
  const { container, button, item, span } = style;
  return (
    <li className={container}>
      <div className={item}>
        <span className={span}>Name:</span> {name}
      </div>

      <div className={item}>
        <span className={span}>Ph.</span> {number}
      </div>
      <button className={button} type="button" onClick={onRemove}></button>
    </li>
  );
}



const mapState = (state, ownProps) => {
  const contact = contactsSelectors.getItemByID(state, ownProps.id);
  return { ...contact };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapState, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onRemove: PropTypes.func,
};
