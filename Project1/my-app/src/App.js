// importing Main  component
import Main from "./components/Main"
// importing Navbar component

import Navbar from "./components/Navbar"
// importing react 
import React from "react" 
// importing  style
import "./style.css"  


// Exporting App component
export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}