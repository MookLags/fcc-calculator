const Screen = ({ displayText = "0", expressionText = "" }) => {
console.log(displayText, expressionText);

  const screenStyle = {
    width: "100%",
    color: "white",
    backgroundColor: "black",
    overflow: "hidden",
    fontFamily: "sans-serif"
  }

  const expressionDisplayStyle = {
    fontSize: "20px",
    color: "orange",
    lineHeight: "20px",
    height: "20px",
    textAlign: "right",
  }

  const displayStyle = {
    fontSize: "29px",
    color: "white",
    lineHeight: "35px",
    textAlign: "right",
  }

  return (
    <div id="screen" style={screenStyle}>
      <div id="expressionDisplay" style={expressionDisplayStyle}>
        <p style={{margin: "0"}}>{expressionText}</p>
      </div>
      <div id="display" style={displayStyle}>
        <p style={{margin: "0"}}>{displayText}</p>
      </div>
    </div>
  )
}

export default Screen;
