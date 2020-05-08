import React from 'react';
import './App.css';
import SearchProductCon from './containers/SearchProductCon';
import GetProductList from './containers/GetProductList';
import SearchCategory from './containers/SearchCategory';
import Paging from './containers/Paging';

function App() {
  return (
    <div className="App">
      <header>
        <SearchProductCon />
        <div className="container-fluid">
          <div className="row">
            <div className="side-bar">
              <div className="head">NGÀNH HÀNG QUAN TÂM</div>
              {<SearchCategory />}
            </div>
            <GetProductList />
            <Paging />
          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
