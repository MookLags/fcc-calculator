import CalcButton from '../components/CalcButton';
import Screen from '../components/Screen';
import { useState, useEffect } from 'react';

      {/*
       Functions: 
       handleOperators
       handleEquals
        if expression == null, "/", "*", "+", "-" and equals is pressed, result = NaN
        if pressed, result = eval(expression), append `=${result}` to expressionDisplay, and setCurrVal(result)
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
    if (currVal.toString().length == 12) {
      return;
    }

    if (currVal != 0 && operatorSet == false && currVal.toString().length <= 12 || currVal == "0." ) {
      setCurrVal(prevVal => prevVal + num);
    } else {
      setCurrVal(num);
    }
  }

  const handleDecimal = () => {
    if (decimalSet) {
      return;
    }
    setCurrVal(prevVal => prevVal + ".");
    setDecimalSet(true);
  }

  const handleOperators = (op) => {
    setExpression(currVal);
    setCurrVal(op)
    setOperatorSet(true);
    setDecimalSet(false);
  }

  const handleClear = () => {
    setCurrVal("0");
    setExpression("");
    setDecimalSet(false);
  }


        {/* reset currVal to whatever operator is clicked
        operatorSet == true
        if operatorSet == true and currVal == "-" then append operator to expression and operatorSet == false
        if operatorSet == true and currVal == any number, append operator to expression and operatorSet == false*/}

  return (
    <div id="calculator" style={calcStyle}>
      <Screen displayText={currVal} expressionText={expression}/>
      <div id="buttonContainer" style={{ display: "flex", flexDirection: "row", marginLeft: "auto", marginRight: "auto", flexWrap: "wrap"}}>
        <CalcButton value="AC" bgColor="#ac3939" buttonWidth="160px" func={handleClear} />
        <CalcButton value="/" bgColor="#666666" func={() => handleOperators("/")} />
        <CalcButton value="*" bgColor="#666666" func={() => handleOperators("*")} />
        <CalcButton value="7" func={() => {handleNums("7")}} />
        <CalcButton value="8" func={sayHi} />
        <CalcButton value="9" func={sayHi} />
        <CalcButton value="-" bgColor="#666666" func={() => handleOperators("-")} />
        <CalcButton value="4" func={sayHi} />
        <CalcButton value="5" func={sayHi} />
        <CalcButton value="6" func={sayHi} />
        <CalcButton value="+" bgColor="#666666" func={() => handleOperators("+")} />
        <CalcButton value="1" func={sayHi} />
        <CalcButton value="2" func={sayHi} />
        <CalcButton value="3" func={sayHi} />
        <CalcButton value="=" bgColor="#004466" buttonHeight="130px" isRelative={false} func={sayHi} />
        <CalcButton value="0" buttonWidth="160px" func={() => {handleNums("0")}} />
        <CalcButton value="." buttonWidth="79px" func={handleDecimal} />
      </div>
    </div>
  )
}

export default HomePage;
