import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import Screen from './components/Screen';
import Keys from './components/Keys';

export default function App() {
  const [currentTheme, setCurrentTheme] = React.useState(1)
  const [displayValue, setDisplayValue] = React.useState(initializeValueObject())

  React.useEffect(() => {
    switch (currentTheme) {
      case 1:
        changePropertyColor("t1")
        break;
      case 2:
        changePropertyColor("t2")
        break;
      case 3:
        changePropertyColor("t3")
        break;
      default:
        changePropertyColor("t1")
    }
  }, [currentTheme])

  function changePropertyColor(theme) {
    document.documentElement.style.setProperty("--current-bg-100", `var(--${theme}-bg-100)`);
    document.documentElement.style.setProperty("--current-bg-200", `var(--${theme}-bg-200)`);
    document.documentElement.style.setProperty("--current-bg-300", `var(--${theme}-bg-300)`);
    document.documentElement.style.setProperty("--current-keys-bg-reset", `var(--${theme}-keys-bg-reset)`);
    document.documentElement.style.setProperty("--current-keys-shadow-reset", `var(--${theme}-keys-shadow-reset)`);
    document.documentElement.style.setProperty("--current-keys-toggle-reset", `var(--${theme}-keys-toggle-reset)`);
    document.documentElement.style.setProperty("--current-keys-bg-equals", `var(--${theme}-keys-bg-equals)`);
    document.documentElement.style.setProperty("--current-keys-shadow-equals", `var(--${theme}-keys-shadow-equals)`);
    document.documentElement.style.setProperty("--current-keys-toggle-equals", `var(--${theme}-keys-toggle-equals)`);
    document.documentElement.style.setProperty("--current-keys-bg-regular", `var(--${theme}-keys-bg-regular)`);
    document.documentElement.style.setProperty("--current-keys-shadow-regular", `var(--${theme}-keys-shadow-regular)`);
    document.documentElement.style.setProperty("--current-keys-toggle-regular", `var(--${theme}-keys-toggle-regular)`);
    document.documentElement.style.setProperty("--current-keys-text-regular", `var(--${theme}-keys-text-regular)`);
    document.documentElement.style.setProperty("--current-keys-text-equals", `var(--${theme}-keys-text-equals)`);
    document.documentElement.style.setProperty("--current-header", `var(--${theme}-header)`);
  }

  function addDigitOrDecimal(value) {
    if (failsErrorCheck()) {
      return
    }
    if (displayValue.operator !== "") {
      //second number
      if (failsDecimalCheck(displayValue.secondNumber, value)) { return }
      if (failsIsZeroCheck(displayValue.secondNumber, value)) { return }
      addValueToNumber("secondNumber", value)
      return
    }
    //first number
    if (failsDecimalCheck(displayValue.firstNumber, value)) { return }
    if (failsIsZeroCheck(displayValue.firstNumber, value)) { return }
    addValueToNumber("firstNumber", value)
  }

  function addOperator(operator) {
    if (failsErrorCheck()) {
      return
    }
    console.log(operator)
    if (operatorIsAlreadySet()) {
      if (currentOperatorUpdated(operator)) {
        return
      }
      if (failsDivideByZeroException()) {
        return
      }
      updateWithCalculation(operator)
      return
    }
    updateOperatorOnly(operator)
    //update operator - same method
    return
  }

  function addValueToNumber(firstOrSecondNumber, value) {
    if (valueIsDecimalAndNumberIsEmpty(value, firstOrSecondNumber, displayValue)) {
      setDisplayValue(prevValue => {
        const updatedDisplayValue = returnObjectWithFirstOrSecondNumberUpdated
          (prevValue, firstOrSecondNumber, "0.")
        return (updatedDisplayValue)
      })
    }
    else if (valueIsNotDecimalAndNumberIsZero(firstOrSecondNumber, value)) {
      setDisplayValue(prevValue => {
        const updatedDisplayValue = returnObjectWithFirstOrSecondNumberUpdated
          (prevValue, firstOrSecondNumber, value)
        return (updatedDisplayValue)
      })
    }
    else {
      setDisplayValue(prevValue => {
        const updatedValue = returnFirstOrSecondNumber(
          firstOrSecondNumber, prevValue) + value
        const updatedDisplayValue = returnObjectWithFirstOrSecondNumberUpdated
          (prevValue, firstOrSecondNumber, updatedValue)
        return (updatedDisplayValue)
      })
    }
  }

  function equalsKeyPressed(operator) {
    if (failsErrorCheck()) {
      return
    }
    if (operator !== "=") { return }
    if (displayValue.secondNumber.length === 0) { return }
    if (failsDivideByZeroException()) { return }
    updateWithCalculation("")
  }

  function failsErrorCheck() {
    const value = returnDisplayScreenValue()
    if (value.includes("e" || value.includes("NaN") || value.includes("Infinity"))) {
      resetDisplay();
      return true
    }
    return false
  }

  function valueIsNotDecimalAndNumberIsZero(firstOrSecondNumber, value) {
    if (returnFirstOrSecondNumber(firstOrSecondNumber, displayValue) === "0"
      && value !== ".") {
      return true
    }
    return false
  }

  function returnObjectWithFirstOrSecondNumberUpdated(prevValue, firstOrSecondNumber, value) {
    return ({
      ...prevValue,
      [firstOrSecondNumber]: value.toString()
    })
  }

  function valueIsDecimalAndNumberIsEmpty(value, firstOrSecondNumber, displayValue) {
    if (value === "." && returnFirstOrSecondNumber(
      firstOrSecondNumber, displayValue).length === 0) {
      return true
    }
    return false
  }

  function returnFirstOrSecondNumber(firstOrSecondNumber, prevValue) {
    switch (firstOrSecondNumber) {
      case "firstNumber":
        return prevValue.firstNumber.toString()
      case "secondNumber":
        return prevValue.secondNumber.toString()
      default:
        return prevValue.firstNumber.toString()
    }
  }

  function failsDivideByZeroException() {
    if (displayValue.operator === "/" && Number(displayValue.secondNumber) === 0) {
      return true
    }
    return false
  }

  function updateOperatorOnly(operator) {
    setDisplayValue(prevValue => {
      return ({
        ...prevValue,
        "operator": operator
      })
    })
  }

  function updateWithCalculation(operator) {
    setDisplayValue(prevValue => {
      return ({
        "firstNumber": ReturnCalculatedAnswer
          (prevValue.operator, [prevValue.firstNumber, prevValue.secondNumber]),
        "operator": operator,
        secondNumber: ""
      })
    })
  }

  function currentOperatorUpdated(operator) {
    if (displayValue.secondNumber.length === 0) {
      updateOperatorOnly(operator)
      return true
    }
    return false
  }

  function operatorIsAlreadySet() {
    if (displayValue.operator.length !== 0) {
      return true
    }
    return false
  }

  function failsIsZeroCheck(number, digit) {
    if ((number === "0") && digit === "0") {
      return true
    }
    return false
  }

  function failsDecimalCheck(number, value) {
    if (value === "." && alreadyContainsDecimal(number)) {
      return true
    }
    return false
  }

  function alreadyContainsDecimal(number) {
    if (number.includes(".")) {
      return true
    }
    return false
  }

  function deleteDigit() {
    if (failsErrorCheck()) {
      return
    }
    setDisplayValue(prevValue => {
      if (prevValue.secondNumber.length > 0) {
        return ({
          ...prevValue,
          "secondNumber": prevValue.secondNumber.slice(0, -1)
        })
      }
      else if (prevValue.operator !== "") {
        return ({
          ...prevValue,
          "operator": ""
        })
      }
      else if (prevValue.firstNumber.length === 1) {
        return (initializeValueObject())
      }
      else if (prevValue.firstNumber.length === 2 && prevValue.firstNumber.toString()[0] === "-") {
        return (initializeValueObject())
      }
      else {
        return ({
          ...prevValue,
          "firstNumber": prevValue.firstNumber.toString().slice(0, -1)
        })
      }
    })
  }

  function resetDisplay() {
    setDisplayValue({
      "firstNumber": "0",
      "operator": "",
      "secondNumber": ""
    })
  }

  function ReturnCalculatedAnswer(operator, splitNumbersArr) {
    switch (operator) {
      case "+":
        return (Number(splitNumbersArr[0]) + Number(splitNumbersArr[1])).toString()
      case "-":
        return Number(splitNumbersArr[0]) - Number(splitNumbersArr[1]).toString()
      case "x":
        return Number(splitNumbersArr[0]) * Number(splitNumbersArr[1]).toString()
      case "/":
        return Number(splitNumbersArr[0]) / Number(splitNumbersArr[1]).toString()
      default:
        return 0
    }
  }

  function initializeValueObject() {
    return ({
      firstNumber: "0",
      secondNumber: "",
      operator: ""
    })
  }

  function returnDisplayScreenValue() {
    return (displayValue.firstNumber + displayValue.operator +
      displayValue.secondNumber)
  }

  return (
    <div className="container">
      <Navbar
        setCurrentTheme={setCurrentTheme}
        currentTheme={currentTheme}
      />
      <Screen displayValue={returnDisplayScreenValue()} />
      <Keys addDigitOrDecimal={addDigitOrDecimal}
        addOperator={addOperator}
        del={deleteDigit}
        reset={resetDisplay}
        equalsKeyPressed={equalsKeyPressed} />
    </div>

  );
}



