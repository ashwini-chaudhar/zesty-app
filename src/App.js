import React, {useState} from 'react';
import './App.css';
import './Style.css';
import cabbage from "./Zesty/image1.jpeg";
import mango from "./Zesty/image2.jpeg";
import fig from "./Zesty/image3.jpeg";
import gaze from "./Zesty/image4.jpeg";
import Peach from "./Zesty/image5.jpeg";
import avocado from "./Zesty/image6.jpeg";

const images = [cabbage, mango, fig, gaze, Peach, avocado];

const App = () => {
const [currentImage, setCurrentImage] = useState(0)

const handleClick = () => {

  setCurrentImage((currentImage) => {
    if(currentImage < images.length-1)
    {
     
      return currentImage + 1;
    } else {
     
      return 0;
    }
  })
  
}

  return (
    <div className="App">
      <div className="title">
    <h1>Zesty</h1>  
    <h2>A Photography Project <br/>Ashwini</h2>

    </div>
<div className='image-container'>
       <h3>{currentImage + 1} / {images.length}</h3>
       <img src={images[currentImage]}  onClick= {handleClick}/>
        </div>
    </div>
  );
}

export default App;
