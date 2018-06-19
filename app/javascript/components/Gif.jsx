import React from "react";
import PropTypes from "prop-types";

class Gif extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="gif">
          <img src={`https://media2.giphy.com/media/${this.props.src}/200.gif`} />
        </div>
      </React.Fragment>
    );
  }
}

Gif.propTypes = {
  src: PropTypes.string
};

export default Gif;
