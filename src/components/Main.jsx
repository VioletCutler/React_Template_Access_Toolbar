import React, { useState } from "react";
//components
import { Navbar, Homepage, Footer, Toolbar } from "./";
//stylesheets
// import {
//   DarkMode
// } from './'

import { Routes, Route } from "react-router-dom";
// import "../stylesheets/index.css";


const Main = () => {
  const [theme, setTheme] = useState('light')
  const [fontSize, setFontSize] = useState('font-size-1')
  const [toolBarVisibility, setToolBarVisibility] = useState(false);

  function changeToolBarDisplay() {
    console.log('Change Tool Bar Display :', !toolBarVisibility)
    setToolBarVisibility(!toolBarVisibility);
  }
  return (
    <div className={theme} id="main">
      <Navbar />
      <div id="routes">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
      {toolBarVisibility ? (
        <Toolbar setTheme={setTheme} changeToolBarDisplay={changeToolBarDisplay} fontSize={fontSize} setFontSize={setFontSize} />
      ) : null}
      <Footer
        toolBarVisibility={toolBarVisibility}
        setToolBarVisibility={setToolBarVisibility}
        changeToolBarDisplay={changeToolBarDisplay}
      />
    </div>
  );
};

export default Main;
