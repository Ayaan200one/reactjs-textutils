import React, {useState} from 'react'
import "./App.css";
import Alertt from './components/Alertt';
import Navbar from "./components/Navbar";
import TextForm from "./components/textform";

function App() {
  const[darkmode, setDarkMode] = useState('light');
  
  const[setAlert, alert] = useState('initialState');
// #722ef9

        const toggleMode = () => {
          if (darkmode === 'light') {
          // if (localStorage.getItem('darkMode')==="light"){
            setDarkMode('dark');
            localStorage.setItem('setDarkMode', "dark");    
            document.body.style.cssText = "background-color:grey; color:#fff";
            // localStorage.setItem("setDarkMode", "dark");
              // for text
              document.getElementById("text").style.cssText = `
              background-color: #a7a4a4;
              color: #fff;
              border: dashed black;
              &:focus > #text {
                outline:none }
              `;
              // for preview textarea
              document.getElementById("prevTxt").style.cssText = `
              background-color: #a7a4a4;
              color: #fff;
              border: dashed black;
              cursor: none;
              `;

              showAlert("Light mode has been enabled", "success");

          // }
        }
          else {
            setDarkMode('light');
            document.body.style.cssText = "background-color:#fff; color:#000";
            // for text
            document.getElementById("text").style.cssText = `
            background-color: #fff;
            color: #000;
            `;
            // for preview textarea
            document.getElementById("prevTxt").style.cssText = `
            background-color: #fff;
            color: #000;
            cursor: none;
            `;
              showAlert("Dark mode has been enabled", "success");
          }
      };

      // Alert Popup
      const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type,
        });
        setTimeout(() => {
          setAlert(null);
        }, 1500);
      };

  return (
    <div className="">
     <Navbar  mode={darkmode} toggleMode={toggleMode}/>
     
     <TextForm heading="Customize Your Text" summaryHead="Preview :"/>

     <Alertt alert={alert} />

    </div>
  );
}

export default App;
