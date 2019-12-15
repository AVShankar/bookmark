import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar'

class App extends React.Component
{
  render()
  {
    return(
      <div className="container-fluid">
        <Navbar />
      </div>
    );
  }
}

export default App;