import { useState } from 'react';

const CalcButton = ({ buttonWidth, buttonHeight, bgColor, hoverBgColor, func, value, isRelative }) => {
  const [isHovered, setIsHovered] = useState(false);

  const calcButtonStyle = {
    display: "flex",
    color: isHovered ? "black" : "white",
    backgroundColor: isHovered ? bgColor : hoverBgColor,
    width: buttonWidth,
    height: buttonHeight,
    position: isRelative ? "relative" : "absolute"
  }

  return (
    <button
      style={calcButtonStyle} 
      onClick={func}
    >
      {value}
    </button>
  )
}

export default CalcButton;
