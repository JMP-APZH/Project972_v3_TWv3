import React from 'react'

function Navbarfb(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"> { props.children }</ul>
            
        </nav>
    )
}

export default Navbarfb
