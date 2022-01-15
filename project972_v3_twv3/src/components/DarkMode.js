import React from 'react'

const DarkMode = () => {
    return (
        <div 
        className="dark:bg-black min-h-screen flex items-center justify-center">
            <div className="dark:bg-gray-800 p-6 w-1/2 bg-gray-100 rounded-lg">
                <h2 className="mb-2 text-4xl font-bold text-black dark:text-white">
                    TailWind DarkMode is Here!
                </h2>

                <p 
                    className="mb-4 text-gray-800 dark:text-gray-200"> 
                    Super cool to switch from light to dark 
                </p>

                <button 
                className="block py-3 px-6 bg-blue-600 
                            dark:bg-yellow-400 text-blue-100 
                            dark:text-yellow-800 
                            rounded-lg"> 
                Let's Go! 
                </button>

            </div>
        </div>
    )
}

export default DarkMode
