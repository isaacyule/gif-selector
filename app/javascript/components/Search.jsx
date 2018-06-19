import React from "react";
import ReactDOM from 'react-dom';

import PropTypes from "prop-types";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        <div className="search">
          <input id="search" className="form-search" type="text" />
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
