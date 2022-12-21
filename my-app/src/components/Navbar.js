export default function Navbar() {
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
                    <div className="theme__toggle__switch">
                        <span></span>
                    </div>
                </div>
            </section>
        </nav>
    )
}