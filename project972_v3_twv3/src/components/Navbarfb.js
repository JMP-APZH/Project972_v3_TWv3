import React from 'react'
import { useNavigate } from 'react-router'

function Navbarfb(props) {

    // const navigate = useNavigate();

    return (
        <nav className="navbar flex flex-row justify-between items-center">

            <div>
                <button 
                className="button-box3 
                            bg-black hover:bg-blue-500 
                            text-white font-bold 
                            py-2 px-4 border border-gray-400 rounded"
                // onClick={() => {
                //     navigate("/registration")
                // }}
                >
                    Home

                </button>
            </div>

            <div>
                <button 
                className="button-box4 
                            bg-black hover:bg-blue-500 
                            text-white font-bold 
                            py-2 px-4 border border-gray-400 rounded"
                >
                    9 7 2 - M a d i n i n a

                </button>
            </div>
            
            <ul className="navbar-nav"> { props.children }</ul>
            
        </nav>
    )
}

export default Navbarfb
