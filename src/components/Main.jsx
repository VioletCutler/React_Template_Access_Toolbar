import React, { useState } from "react";
//components
import { Navbar, Homepage, Access, Toolbar, About } from "./";
//stylesheets
// import {
//   DarkMode
// } from './'

import { Routes, Route } from "react-router-dom";
import "../stylesheets/index.css";


const Main = () => {
  const [theme, setTheme] = useState('light')
  const [fontSize, setFontSize] = useState('font-size-1')
  const [toolBarVisibility, setToolBarVisibility] = useState(false);

  function changeToolBarDisplay() {
    console.log('Change Tool Bar Display :', !toolBarVisibility)
    setToolBarVisibility(!toolBarVisibility);
  }
  return (
    <div className={`${theme}-body`} id="main">
      <Navbar theme={theme}/>
      <div id="routes">
        <Routes>
          <Route path="/" element={<Homepage theme={theme}/>} />
          <Route path="/about" element={<About theme={theme}/>} />
        </Routes>
      </div>
      {toolBarVisibility ? (
        <Toolbar setTheme={setTheme} changeToolBarDisplay={changeToolBarDisplay} fontSize={fontSize} setFontSize={setFontSize} theme={theme} />
      ) : null}
      <Access
        toolBarVisibility={toolBarVisibility}
        setToolBarVisibility={setToolBarVisibility}
        changeToolBarDisplay={changeToolBarDisplay}
      />
    </div>
  );
};

export default Main;
