import React from "react";

// CSS
import "/src/assets/css/Header.css"

const Header = () => {
    return (
        <header className="header d-flex justify-content-between align-items-center p-3 border-bottom">
            <h1 className="title h3 m-0">SaimaPay Gateway</h1>
            <span className="labelBar">LABORATORY</span>
        </header>
    )
}

export default Header;