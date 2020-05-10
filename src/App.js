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
              <SearchCategory />
            </div>
            <GetProductList />
          </div>
          <div className="row">
            <div className="col-sm-4 offset-sm-8">
              <Paging />
            </div>
          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
