export default function Navbar({ setCurrentTheme, currentTheme }) {

    function toggleTheme() {
        setCurrentTheme(previousTheme => {
            return previousTheme === 3 ? 1 : ++previousTheme
        })
    }

    function switchPosition() {
        switch (currentTheme) {
            case 1:
                return "flex-start"
            case 2:
                return "center"
            case 3:
                return "flex-end"
            default:
                return "flex-start"
        }
    }

    return (
        <nav className="navbar wrapper">
            <h1 className='color navbar__heading'>calc</h1>
            <section className="navbar__theme">
                <p className="theme__label">Theme</p>
                <div className="theme__toggle">
                    <div className="theme__toggle__labels">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div className={"theme__toggle__switch " + switchPosition()}
                        onClick={toggleTheme}>
                        <span id="toggle-ball"></span>
                    </div>
                </div>
            </section>
        </nav >
    )
}