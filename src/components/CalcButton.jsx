import { useState } from 'react';

const CalcButton = ({ buttonWidth = "80px", buttonHeight = "65px", bgColor = "#4d4d4d", func, value, isRelative = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  const calcButtonStyle = {
    display: "flex",
    alignItems: "center",
    color: isHovered ? "black" : "white",
    background: bgColor,
    filter: isHovered ? "brightness(1.2)" : "brightness(1)",
    width: buttonWidth,
    height: buttonHeight,
    outline: "1px solid black",
    border: isHovered ? "1px solid gray" : "none",
    zIndex: isHovered ? "3" : "0",
    position: isRelative ? "relative" : "absolute",
    cursor: isHovered ? "pointer" : "normal",
    fontSize: "20px",
    ...(isRelative ? {} : {bottom: "5px", right: "5px"})
  }

  return (
    <button
      style={calcButtonStyle} 
      onClick={func}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={{marginLeft: "auto", marginRight: "auto"}}>{value}</p>
    </button>
  )
}

export default CalcButton;
