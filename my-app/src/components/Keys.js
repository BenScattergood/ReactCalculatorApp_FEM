import Key from "./Key"

export default function Keys({ addValue, addOperator, del, reset }) {
    return (
        <main className="keys wrapper">
            <Key theme="regular-theme"
                value="7"
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="8"
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="9"
                clickEvent={addValue}
            />
            <Key theme="reset-theme"
                value="DEL"
                clickEvent={del}
            />
            <Key theme="regular-theme"
                value="4"
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="5"
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="6"
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="+"
                clickEvent={addOperator}
            />
            <Key theme="regular-theme"
                value="1"
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="2"
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="3"
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="-"
                clickEvent={addOperator}
            />
            <Key theme="regular-theme"
                value="."
                clickEvent={addValue}
            />
            <Key theme="regular-theme"
                value="0"
                clickEvent={addValue}
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
            />
        </main>
    )
}