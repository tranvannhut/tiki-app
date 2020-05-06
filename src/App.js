import React from 'react';
import './App.css';
import SearchProductCon from './containers/SearchProductCon';
import SearchCategory from './containers/SearchCategory';

function App() {
  return (
    <div className="App">
      <header>
        <SearchProductCon />
        <div className="container-fluid">
          <div className="row">
            <div className="side-bar">
              <div className="head">NGÀNH HÀNG QUAN TÂM</div>
              <SearchCategory />
            </div>
            <div className="product-listing">
            </div>

          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
