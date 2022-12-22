import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import Screen from './components/Screen';
import Keys from './components/Keys';

export default function App() {
  const [currentTheme, setCurrentTheme] = React.useState(1)
  const [displayValue, setDisplayValue] = React.useState(0)

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

  function addNumber(value) {
    setDisplayValue(prevValue => {
      return (
        prevValue + value
      )
    })
  }

  function addOperator(operator) {
    const currentSplitOperator = alreadySplit()
    if (currentSplitOperator.length !== 0) {
      //check if there is number after.
      //perform calculation
      //add to end
      return
    }
    setDisplayValue(prevValue => prevValue + operator)
  }

  function alreadySplit() {
    if (displayValue.includes("+")) { return "+" }
    if (displayValue.includes("-")) { return "-" }
    if (displayValue.includes("/")) { return "/" }
    if (displayValue.includes("x")) { return "x" }
    return ("")
  }

  return (
    <div className="container">
      <Navbar
        setCurrentTheme={setCurrentTheme}
        currentTheme={currentTheme}
      />
      <Screen displayValue={displayValue} />
      <Keys addNumber={addNumber} addOperator={addOperator} />
    </div>

  );
}



