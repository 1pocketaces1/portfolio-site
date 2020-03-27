import React from 'react';
import logo from './logo.svg';
import './App.css';

import SchoolPage from './pages/School/School';
import Twenty18Page from './pages/2018/2018';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          My Software development journey.
        </p>
      </header>

      <div className={"page"}>
        <Twenty18Page />
      </div>

      <div className={"buttonLeft"}>
        <button class={"btn"}><i class="fa fa-arrow-left"></i></button>
      </div>

      <div className={"buttonRight"}>
        <button class="btn"><i class="fa fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default App;
