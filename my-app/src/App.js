import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import Screen from './components/Screen';
import Keys from './components/Keys';

export default function App() {
  const [currentTheme, setCurrentTheme] = React.useState(1)
  const [displayValue, setDisplayValue] = React.useState("0")

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

  function addValue(value) {
    setDisplayValue(prevValue => {
      const currentNumber = getCurrentWorkingNumber(prevValue)
      if (currentNumber === "0" && value !== ".") { return value }
      if (currentNumber === "" && value === ".") { return prevValue + "0" + value }
      if (currentNumber.includes(".") && value === ".") { return prevValue }
      else { return prevValue + value }
    })
  }

  function addOperator(operator) {
    const currentSplitOperator = returnSplitOperator()
    if (currentSplitOperator.length === 0) {
      setDisplayValue(prevValue => prevValue + operator)
      return
    }

    const splitNumbersArr = SplitNumbers(currentSplitOperator)

    if (splitNumbersArr[1].length === 0) {
      setDisplayValue(prevValue =>
        prevValue.slice(0, prevValue.length - 1) + operator)
      return
    }
    if (Number(splitNumbersArr[1]) === 0 && currentSplitOperator === "/") {
      //divide by zero exception
      return
    }

    const currentTotal = ReturnCalculatedAnswer(currentSplitOperator, splitNumbersArr)
    setDisplayValue(currentTotal + operator)
    return
  }

  function deleteDigit() {
    setDisplayValue(prevValue => {
      if (prevValue === "0") { return "0" }
      const newValue = prevValue.slice(0, prevValue.length - 1)
      if (newValue.length === 0) { return "0" }
      return newValue
    })
  }

  function resetDisplay() {
    setDisplayValue("0")
  }

  function returnSplitOperator() {
    if (displayValue.includes("+")) { return "+" }
    if (displayValue.includes("-")) { return "-" }
    if (displayValue.includes("/")) { return "/" }
    if (displayValue.includes("x")) { return "x" }
    return ("")
  }

  function SplitNumbers(splitValue) {
    return displayValue.split(splitValue)
  }

  function ReturnCalculatedAnswer(operator, splitNumbersArr) {
    switch (operator) {
      case "+":
        return Number(splitNumbersArr[0]) + Number(splitNumbersArr[1])
      case "-":
        return Number(splitNumbersArr[0]) - Number(splitNumbersArr[1])
      case "x":
        return Number(splitNumbersArr[0]) * Number(splitNumbersArr[1])
      case "/":
        return Number(splitNumbersArr[0]) / Number(splitNumbersArr[1])
      default:
        return 0
    }
  }

  function getCurrentWorkingNumber(displayValue) {
    const currentSplitOperator = returnSplitOperator()
    if (currentSplitOperator.length === 0) { return displayValue }
    return SplitNumbers(currentSplitOperator)[1]
  }

  return (
    <div className="container">
      <Navbar
        setCurrentTheme={setCurrentTheme}
        currentTheme={currentTheme}
      />
      <Screen displayValue={displayValue} />
      <Keys addNumber={addValue}
        addOperator={addOperator}
        del={deleteDigit}
        reset={resetDisplay} />
    </div>

  );
}



