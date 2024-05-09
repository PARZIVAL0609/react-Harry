import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(29 30 67)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  const [mode, setMode] = useState('light');
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container">
        <TextForm heading="Enter the text to analyse below" mode = {mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
