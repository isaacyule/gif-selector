import React from "react";
import PropTypes from "prop-types";

import Gif from './Gif.jsx';

class GifList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        {this.props.gifList.map(src =>
          <Gif src={src} />
        )}
      </React.Fragment>
    );
  }
}

export default GifList;
