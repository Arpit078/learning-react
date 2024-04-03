import { useState } from "react";
import Mage from "./components/Mage";
const App = () => {
 const [index,setIndex] = useState(0);
 const imgArr = ["n1.jpg","n2.jpg","n3.png","n4.jpg","n5.jpg","n6.jpg","n7.jpg","n8.png"]
 const handleNext=()=>{
  setIndex((index+1)%imgArr.length)
 }
 const handlePrev=()=>{
  setIndex((index+imgArr.length-1 )%imgArr.length)
  console.log(index)
 }
 return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <button onClick={handlePrev}>prev</button>
      <Mage src={imgArr[index]} alt="xx"/>
      <button onClick={handleNext}>next</button>
    </div>
 );
}

export default App;
