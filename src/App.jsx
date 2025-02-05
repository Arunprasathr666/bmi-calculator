import { useState } from 'react'

import './App.css'


import gainIcon from "./assets/gain.jpg"
import normalIcon from "./assets/normal.webp"
import overIcon from "./assets/over.webp"
import obeseIcon from "./assets/obese.jpg"

function App() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [image, setImage] = useState("");

  // const [gainIcon, setGainIcon] = useState("gainIcon");
  // const [normalIcon, setNormalIcon] = useState("normalIcon");
  // const [OverIcon, setOverIcon] = useState("OverIcon");

  



  const calculateBmi=()=>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMeters = height / 100;
      
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      let bmiStatus = ''

      let imageSrc = '';

      if(bmiValue < 18.5){
        setBmiStatus("Under Weight");
        imageSrc = gainIcon;
      }else if (bmiValue >= 18.5 && bmiValue < 24.9 ){
        setBmiStatus("Normal Weight");
        imageSrc = normalIcon;
      }else if (bmiValue >= 25 && bmiValue < 29.9 ){
        setBmiStatus("Over Weight");
        imageSrc = overIcon;
    }else {
      setBmiStatus("Obese");
      imageSrc = obeseIcon;
    }
    setImage(imageSrc)
    setErrorMessage("")
  }
    else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter the valid numeric values for height and weight");
  };
  

  };



  const clearAll = ()=> {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setImage("");

  };

  
  // let imgsrc;
  // if(bmiValue <1){
  //   imgsrc = null;
  // }
  // else if(bmiValue < 18.5){
  //   imgsrc = require ('./assets/gain.jpg')
  // }
  // else if(bmiValue >= 18.5 && bmiValue < 24.9){
  //   imgsrc = require ('./assets/normal.webp')
  // }
  // else if(bmiValue >= 25 && bmiValue < 29.9){
  //   imgsrc = require ('./assets/overwebp')
  // }

  return (
    <>
     <div className="bmi-calculator">
      <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator </h1>
        {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" value={height} id="height"
            onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text" value={weight} id="Weight"
            onChange={(e)=> setWeight(e.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !==null &&(
            <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
            <img src={image} alt={bmiStatus} className="bmi-image" />
        </div>
          )
          }
          
      </div>
      <div className="name">
        <p>designed by</p><span>Arun Prasath</span></div>
     </div>
     
    </>
  );
};

export default App;
