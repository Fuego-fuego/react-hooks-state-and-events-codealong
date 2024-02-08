import React , {useState} from "react";



function Toggle() {

  const [ isOn, setIsOn ] = useState (false);
  
  function handleClick(){
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  const btnStyle = {background: color};

  return <button onClick={handleClick} style = {btnStyle}> {isOn?"ON" : "OFF"}</button>;
}

export default Toggle;
