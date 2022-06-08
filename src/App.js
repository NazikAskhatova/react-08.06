import { useState } from "react";

function App() {
const [number, setNumber] = useState(0);

// alert("WElcome!");

// localStorage

// document.title = "Hello every1!"

// setInterval setTimeout

// Side Effect
const color = {
  red: Math.floor(Math.random() * 255) ,
  green: Math.floor(Math.random() * 255) ,
  blue: Math.floor(Math.random() * 255) ,
};
const styles = {
  // color: `rgb(255, 255, 255)`
  color: `rgb(${color.red}, ${color.green}, ${color.blue})` ,
}

return (
  <div className="App">
<h1>Hello World</h1>
  </div>
)
}

export default App;
