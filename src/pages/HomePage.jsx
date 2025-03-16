import { useState } from 'react';

const HomePage = () => {
  const [currVal, setCurrVal] = useState("0");
  const [expression, setExpression] = useState("");
  const [decimalSet, setDecimalSet] = useState("");
  const [operatorSet, setOperatorSet] = useState(false);
  const [result, setResult] = useState("");
  return (
    <div>
      Home Page
      {/*
       THE PLAN
       create component for 
       create component for 
       HomePage will house calculator
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
