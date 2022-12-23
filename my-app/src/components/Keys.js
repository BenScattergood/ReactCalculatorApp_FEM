import Key from "./Key"

export default function Keys({ addDigitOrDecimal, addOperator, del, reset, equalsKeyPressed }) {
    return (
        <main className="keys wrapper">
            <Key theme="regular-theme"
                value="7"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="8"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="9"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="reset-theme"
                value="DEL"
                clickEvent={del}
            />
            <Key theme="regular-theme"
                value="4"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="5"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="6"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="+"
                clickEvent={addOperator}
            />
            <Key theme="regular-theme"
                value="1"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="2"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="3"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="-"
                clickEvent={addOperator}
            />
            <Key theme="regular-theme"
                value="."
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="0"
                clickEvent={addDigitOrDecimal}
            />
            <Key theme="regular-theme"
                value="/"
                clickEvent={addOperator}
            />
            <Key theme="regular-theme"
                value="x"
                clickEvent={addOperator}
            />
            <Key theme="reset-theme"
                value="RESET"
                features="large-button"
                clickEvent={reset}
            />
            <Key theme="equals-theme"
                value="="
                features="large-button"
                clickEvent={equalsKeyPressed}
            />
        </main>
    )
}