import { useState } from "react";
import "./ColorPicker.css";
export const ColorPicker = () => {
  const [color, setcolor] = useState("#000000");
  const handleColor = ((value)=>{
    console.log(value);
    
setcolor(value)
  })

  return (
    <>
  
      <div className="parent">
        <h1 className="h1" style={{
            color: color
        }} >Color Picker App</h1>
      <input type="color" onChange={(e)=>handleColor(e.target.value)} />
      <div className="show">
        <div
          className="box"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: color,
          }}
        ></div>
        <h1 style={{
            color:color
        }} >Your Color is {color}</h1>
      </div>
    </div>
    </>
  );
};
