const Screen = ({ displayText, expressionText }) => {

  const screenStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "black",
    fontFamily: "digital"
  }

  const expressionDisplayStyle = {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "right",
    color: "orange",
    fontSize: "20px"
  }

  const displayStyle = {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "right",
    color: "white",
    fontSize: "29px"
  }

  return (
    <div id="screen" style={screenStyle}>
      <div id="expressionDisplay" style={expressionDisplayStyle}>
        <p>{expressionText}</p>
      </div>
      <div id="display" style={displayStyle}>
        <p>{displayText}</p>
      </div>
    </div>
  )
}

       {/* screen
        Two divs, one #display and the other #expressionScreen. Props of text which will be held in state */}
