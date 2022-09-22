import Header from "./Header";
import Footer from "./Footer";
import Bichvala from "./Bichvala";

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (

    <div className="App">
      <Header/>
      <Bichvala/>
      <Footer/>
    </div>
  );
}
}

export default App;
