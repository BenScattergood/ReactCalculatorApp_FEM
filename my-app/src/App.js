import './App.css';
import Navbar from './components/Navbar';
import React from 'react'

export default function App() {
  const [currentTheme, setCurrentTheme] = React.useState(1)

  React.useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--current-bg-100');
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

    console.log(color)
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

  return (
    <div className="container">
      <Navbar
        setCurrentTheme={setCurrentTheme}
        currentTheme={currentTheme}
      />
      <div className="wrapper screen">
        <h3 className="screen__text">123,4</h3>
      </div>
      <main className=""></main>
    </div>

  );
}



