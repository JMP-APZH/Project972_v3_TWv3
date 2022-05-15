import React, { useState, useRef, useEffect } from 'react'
import '../index.css';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';

import { CSSTransition } from 'react-transition-group';

// import { useNavigate } from 'react-router'

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    // const navigate = useNavigate();

    

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {

        return (
            <a 
                href="#" 
                className="menu-item"
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} >
                <span className="icon-button"> {props.leftIcon} </span>

                {props.children}

                <span className="icon-right"> {props.rightIcon} </span>
            </a>
        )
    }


    return (
        <div 
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
            >

            <CSSTransition
                className="menu-primary pb-6" 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500}
                onEnter={calcHeight}
                >
                <div className="menu">

                    <DropdownItem
                        // goToMenu="surveys-m"
                        // onClick={() => {
                        //     navigate("/home")
                        // }}
                    >
                        Home
                    </DropdownItem>

                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="surveys-m"
                        >
                            Surveys
                    </DropdownItem>

                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                        >
                        User Menu
                    </DropdownItem>

                    <DropdownItem leftIcon={<BoltIcon />}>The End!</DropdownItem>

                </div>

            </CSSTransition>

            <CSSTransition
                className="menu-secondary pb-6" 
                in={activeMenu === 'surveys-m'} 
                unmountOnExit 
                timeout={500}
                onEnter={calcHeight}
                >

                <div className="menu">

                    <DropdownItem
                        goToMenu="main"
                        leftIcon={<ArrowIcon />}
                        >
                            <h2> Main Menu </h2>
                    </DropdownItem>

                    <DropdownItem leftIcon={<BoltIcon />}>Survey 1</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Survey 2</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Survey 3</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Survey 4</DropdownItem>
                    
                    <DropdownItem leftIcon={<BoltIcon />}>Survey 5</DropdownItem>

                </div>

            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                className="menu-secondary pb-6"
                unmountOnExit
                onEnter={calcHeight}>

                <div className="menu">
                    <DropdownItem 
                        goToMenu="main" 
                        leftIcon={<ArrowIcon />}
                        >
                        <h2>Main Menu</h2>
                    </DropdownItem>

                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>

                    <DropdownItem leftIcon={<BoltIcon />}>The End!</DropdownItem>

                </div>
            </CSSTransition>

        </div>
    )
}

export default DropdownMenu
