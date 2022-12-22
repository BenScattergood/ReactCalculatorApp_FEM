import Key from "./Key"

export default function Keys({ addNumber, addOperator }) {
    return (
        <main className="keys wrapper">
            <Key theme="regular-theme"
                value="7"
                clickEvent={addNumber}
            />
            <Key theme="regular-theme"
                value="8"
                clickEvent={addNumber}
            />
            <Key theme="regular-theme"
                value="9"
                clickEvent={addNumber}
            />
            <Key theme="reset-theme"
                value="DEL"

            />
            <Key theme="regular-theme"
                value="4"
                clickEvent={addNumber}
            />
            <Key theme="regular-theme"
                value="5"
                clickEvent={addNumber}
            />
            <Key theme="regular-theme"
                value="6"
                clickEvent={addNumber}
            />
            <Key theme="regular-theme"
                value="+"
                clickEvent={addOperator}
            />
            <Key theme="regular-theme"
                value="1"
                clickEvent={addNumber}
            />
            <Key theme="regular-theme"
                value="2"
                clickEvent={addNumber}
            />
            <Key theme="regular-theme"
                value="3"
                clickEvent={addNumber}
            />
            <Key theme="regular-theme"
                value="-"
                clickEvent={addOperator}
            />
            <Key theme="regular-theme"
                value="."
            />
            <Key theme="regular-theme"
                value="0"
                clickEvent={addNumber}
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
            />
            <Key theme="equals-theme"
                value="="
                features="large-button"
            />
        </main>
    )
}