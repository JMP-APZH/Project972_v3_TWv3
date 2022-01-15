import React from 'react'
import useDarkMode from '../hook/useDarkMode'

const DarkMode2 = () => {
    
    return (
        <div 
            className="flex items-center justify-center 
                        min-h-screen dark:bg-black transition duration-500">
            <h1 
                className="text-black dark:text-blue-800 text-5xl"> 
                DarkMode Component 
            </h1>
            
        </div>
    )
}

export default DarkMode2
