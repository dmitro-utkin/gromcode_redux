import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as userActions from "./users.actions";

class SearchField extends Component {
  state = {
    userName: "",
  };

  onChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

SearchField.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
};

const mapDispatch = {
  fetchUserData: userActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
