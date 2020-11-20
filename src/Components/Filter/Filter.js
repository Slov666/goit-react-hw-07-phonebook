import React from "react";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contactsAction";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ value, onFilter }) => {
  const { container, input } = style;
  return (
    <div className={container}>
      <p>Find conctact by name</p>
      <input
        className={input}
        type="text"
        onChange={(e) => onFilter(e.target.value)}
        value={value}
      />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = {
  onFilter: contactsAction.filter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
