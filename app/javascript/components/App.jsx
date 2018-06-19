import React from "react";
import ReactDOM from 'react-dom';

import PropTypes from "prop-types";

import Gif from './Gif.jsx';
import Search from './Search.jsx';
import GifList from './GifList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gifList: ["Cmr1OMJ2FN0B2", "5xtDarEbygs3Pu7p3jO"],
      selectedGif: ""
    };

  }

  render () {
    return (
      <React.Fragment>
        <div className="app">
          <div className="left-scene">
            <Search />
            <div className="selectedGif">
              <Gif src={this.state.selectedGif} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifList={this.state.gifList} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
