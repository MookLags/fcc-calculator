import CalcButton from '../components/CalcButton';
import Screen from '../components/Screen';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [currVal, setCurrVal] = useState("0");
  const [expression, setExpression] = useState("");
  const [decimalSet, setDecimalSet] = useState("");
  const [operator, setOperator] = useState([]);
  const [operatorInUse, setOperatorInUse] = useState("");
  const [result, setResult] = useState("");
  const [expressionComplete, setExpressionComplete] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#c3c3d6";
    document.body.style.margin = "0px";
    return () => {
      document.body.backgroundColor = "";
      document.body.margin = "";
    }
  }, []);


  useEffect(() => {
    console.log("Operator in use: " + operatorInUse);
  }, [operatorInUse]);

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

  const handleNums = (num) => {
    if (expressionComplete) {
      setOperator([]);
      setOperatorInUse("");
      setExpressionComplete(false);
      setExpression("");
      setCurrVal("");
    }

    setExpression(prevVal => prevVal + operatorInUse);
    setOperator([]);
    setOperatorInUse("");
    if (currVal.toString().length == 12) {
      return;
    }

    let zeroPointRegex = /^0\.0*$/

    if (currVal != 0 && currVal.toString().length <= 12 || zeroPointRegex.test(currVal)) {
      setCurrVal(prevVal => prevVal + num);
      setExpression(prevVal => prevVal + num);
    } else {
      setCurrVal(num);
      setExpression(prevVal => prevVal + num);
    }
  }

  const handleDecimal = () => {
    setOperator([]);
    if (decimalSet) {
      return;
    }
    setCurrVal(prevVal => prevVal + ".");
    setExpression(prevVal => prevVal + ".");
    setDecimalSet(true);
  }
     
  const handleOperators = (op) => {
    setDecimalSet(false);
    if (expressionComplete) {
      setExpression(result);
      setExpressionComplete(false);
    }
    setOperatorInUse("");
    setCurrVal("");
    setOperator(prevOp => {
      const newOps = prevOp ? [...prevOp, op] : [op];
      if (newOps.length > 1 && newOps[newOps.length - 1] === "-") {
        setCurrVal(() => newOps[newOps.length - 2] + newOps[newOps.length - 1]);
        setOperatorInUse(() => newOps[newOps.length - 2] + newOps[newOps.length - 1]);
      } else {
        setCurrVal(() => newOps[newOps.length - 1]);
        setOperatorInUse(() => newOps[newOps.length - 1]);
      }
      return newOps;
    });
  }

  const handleClear = () => {
    setCurrVal("0");
    setExpression("");
    setOperator([]);
    setOperatorInUse("");
    setDecimalSet(false);
  }

  const handleEquals = () => {
    let expressionResult = eval(expression);
    setResult(expressionResult);
    setCurrVal(expressionResult);
    setDecimalSet(false);
    setOperator("");
    setExpressionComplete(true);
    setExpression(prevVal => prevVal + `=${expressionResult}`);
  }



  return (
    <div id="calculator" style={calcStyle}>
      <Screen displayText={currVal} expressionText={expression}/>
      <div id="buttonContainer" style={{ display: "flex", flexDirection: "row", marginLeft: "auto", marginRight: "auto", flexWrap: "wrap"}}>
        <CalcButton name="clear" value="AC" bgColor="#ac3939" buttonWidth="160px" func={handleClear} />
        <CalcButton name="divide" value="/" bgColor="#666666" func={() => handleOperators("/")} />
        <CalcButton name="multiply" value="*" bgColor="#666666" func={() => handleOperators("*")} />
        <CalcButton name="seven" value="7" func={() => {handleNums("7")}} />
        <CalcButton name="eight" value="8" func={() => {handleNums("8")}} />
        <CalcButton name="nine" value="9" func={() => {handleNums("9")}} />
        <CalcButton name="subtract" value="-" bgColor="#666666" func={() => handleOperators("-")} />
        <CalcButton name="four" value="4" func={() => {handleNums("4")}} />
        <CalcButton name="five" value="5" func={() => {handleNums("5")}} />
        <CalcButton name="six" value="6" func={() => {handleNums("6")}} />
        <CalcButton name="add" value="+" bgColor="#666666" func={() => handleOperators("+")} />
        <CalcButton name="one" value="1" func={() => {handleNums("1")}} />
        <CalcButton name="two" value="2" func={() => {handleNums("2")}} />
        <CalcButton name="three" value="3" func={() => {handleNums("3")}} />
        <CalcButton name="equals" value="=" bgColor="#004466" buttonHeight="130px" isRelative={false} func={handleEquals} />
        <CalcButton name="zero" value="0" buttonWidth="160px" func={() => {handleNums("0")}} />
        <CalcButton name="decimal" value="." buttonWidth="79px" func={handleDecimal} />
      </div>
    </div>
  )
}

export default HomePage;
