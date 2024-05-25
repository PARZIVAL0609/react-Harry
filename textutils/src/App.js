import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2C3333";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - LightMode";
    }
  };

  return (
    <>
      <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route
              exact
              path="/"
              element={
        <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} />
        }
            ></Route>
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
