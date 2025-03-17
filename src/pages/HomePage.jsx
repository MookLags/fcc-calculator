import CalcButton from '../components/CalcButton';
import Screen from '../components/Screen';
import { useState, useEffect } from 'react';

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

const HomePage = () => {
  const [currVal, setCurrVal] = useState("0");
  const [expression, setExpression] = useState("");
  const [decimalSet, setDecimalSet] = useState("");
  const [operatorSet, setOperatorSet] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "#c3c3d6";
    document.body.style.margin = "0px";
    return () => {
      document.body.backgroundColor = "";
      document.body.margin = "";
    }
  }, []);

  const calcStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    padding: "5px",
    marginTop: "100px",
    width: "320px",
    backgroundColor: "black",
    border: "2px solid #47476b",
    position: "relative",

  }

  const sayHi = () => { console.log("hi") };

  const handleNums = (num) => {
    {/* if currVal == 1-9 => append num to currVal
        else currVal = num
    */}
    if (currVal == /[1-9]/) {
      setCurrVal(prevVal => prevVal + num)
    } else {
      setCurrVal(num);
    }
  }

  return (
    <div id="calculator" style={calcStyle}>
      <Screen displayText={currVal} expressionText={expression}/>
      <div id="buttonContainer" style={{ display: "flex", flexDirection: "row", marginLeft: "auto", marginRight: "auto", flexWrap: "wrap"}}>
        <CalcButton value="AC" bgColor="#ac3939" buttonWidth="160px" func={sayHi} />
        <CalcButton value="/" bgColor="#666666" func={sayHi} />
        <CalcButton value="*" bgColor="#666666" func={sayHi} />
        <CalcButton value="7" func={() => {handleNums("7")}} />
        <CalcButton value="8" func={sayHi} />
        <CalcButton value="9" func={sayHi} />
        <CalcButton value="-" bgColor="#666666" func={sayHi} />
        <CalcButton value="4" func={sayHi} />
        <CalcButton value="5" func={sayHi} />
        <CalcButton value="6" func={sayHi} />
        <CalcButton value="+" bgColor="#666666" func={sayHi} />
        <CalcButton value="1" func={sayHi} />
        <CalcButton value="2" func={sayHi} />
        <CalcButton value="3" func={sayHi} />
        <CalcButton value="=" bgColor="#004466" buttonHeight="130px" isRelative={false} func={sayHi} />
        <CalcButton value="0" buttonWidth="160px" func={sayHi} />
        <CalcButton value="." buttonWidth="79px" func={sayHi} />
      </div>
    </div>
  )
}

export default HomePage;
