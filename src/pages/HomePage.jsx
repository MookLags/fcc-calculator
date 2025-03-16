import CalcButton from '../components/CalcButton';
import Screen from '../components/Screen';
import { useState } from 'react';

const HomePage = () => {
  const [currVal, setCurrVal] = useState("0");
  const [expression, setExpression] = useState("");
  const [decimalSet, setDecimalSet] = useState("");
  const [operatorSet, setOperatorSet] = useState(false);
  const [result, setResult] = useState("");

  const calcStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "100px",
    width: "334px",
    height: "394px",
    backgroundColor: "black",
    border: "2px solid #47476b"
  }

  const sayHi = () => { console.log("hi") };

  return (
    <div id="calculator" style={calcStyle}>
      <Screen />
      <div id="buttonContainer" style={{ display: "flex", flexDirection: "row", gap: "1px", marginLeft: "auto", marginRight: "auto"}}>
        <CalcButton value="5" func={sayHi} />
        <CalcButton value="5" func={sayHi} />
        <CalcButton value="5" func={sayHi} />
        <CalcButton value="5" func={sayHi} />
      </div>
      {/*
       Functions: 
       handleNums
        display numbers and decimal
        if currVal == 0, disable 0 button
        if decimalPlaced == true, disable decimal button
       handleOperators
        reset currVal to whatever operator is clicked
        operatorSet == true
        if operatorSet == true and currVal == "-" then append operator to expression and operatorSet == false
        if operatorSet == true and currVal == any number, append operator to expression and operatorSet == false
       handleEquals
        if expression == null, "/", "*", "+", "-" and equals is pressed, result = NaN
        if pressed, result = eval(expression), append `=${result}` to expressionDisplay, and setCurrVal(result)
       handleClear
        setCurrval("0") setExpression("")
      */}
    </div>
  )
}

export default HomePage;
