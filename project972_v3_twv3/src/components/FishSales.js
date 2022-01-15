import React from 'react'

const FishSales = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-5
        bg-blue-400 bg-cover p-5">

        {/* <div className="min-h-screen flex flex-col items-center justify-center space-y-5
        bg-wave-img bg-cover p-5"> */}

            <div className="bg-white p-16 rounded shadow-2xl
                            w-2/3">

                <h2 
                    className="text-3xl font-bold mb-8 text-purple-700
                                flex items-center justify-center">
                    Fish Sales - Publishing
                </h2>

                <form className="space-y-5">
                    
                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Fisher Name - automated filled in 
                        </label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>
                    
                    <div className="bg-black">
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Boat Name 
                        </label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>

                    <div className="bg-black flex space-x-5">

                        <div>
                            <label 
                                className="block w-full mb-1 font-bold text-gray-500"> 
                                Fish Category 1
                            </label>
                            <input 
                                type="text"
                                className="w-full border-2 border-gray-200 p-3 rounded 
                                        outline-none focus:border-purple-500" 
                                />
                        </div>

                        <div>
                            <label 
                                className="block w-full mb-1 font-bold text-gray-500"> 
                                Quantity 1
                            </label>
                            <input 
                                type="text"
                                className="w-full border-2 border-gray-200 p-3 rounded 
                                        outline-none focus:border-purple-500" 
                                />
                        </div>

                    </div>

                    <div className="flex flex-row">

                        <div>
                            <label 
                                className="block mb-1 font-bold text-gray-500"> 
                                Fish Category 2
                            </label>
                            <input 
                                type="text"
                                className="w-full border-2 border-gray-200 p-3 rounded 
                                        outline-none focus:border-purple-500" 
                                />
                        </div>

                        <div>
                            <label 
                                className="block mb-1 font-bold text-gray-500"> 
                                Quantity 2
                            </label>
                            <input 
                                type="text"
                                className="w-full border-2 border-gray-200 p-3 rounded 
                                        outline-none focus:border-purple-500" 
                                />
                        </div>

                    </div>

                    <div className="flex flex-row">

                        <div>
                            <label 
                                className="block mb-1 font-bold text-gray-500"> 
                                Fish Category 3
                            </label>
                            <input 
                                type="text"
                                className="w-full border-2 border-gray-200 p-3 rounded 
                                        outline-none focus:border-purple-500" 
                                />
                        </div>

                        <div>
                            <label 
                                className="block mb-1 font-bold text-gray-500"> 
                                Quantity 3
                            </label>
                            <input 
                                type="text"
                                className="w-full border-2 border-gray-200 p-3 rounded 
                                        outline-none focus:border-purple-500" 
                                />
                        </div>

                    </div>


                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Fish Sales Location - automated filled in as specified by the fisher
                        </label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Sales Date & Time - most probably fishing today or can chosen by fisher 
                        </label>
                        <input 
                            type="datetime-local" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>

                    <button 
                    className="block w-full bg-yellow-600 
                                hover:bg-yellow-300 p-4 rounded 
                                text-purple-700 transition duration-300
                                hover:text-purple-500"> Sign Up </button>

                </form>


            </div>

            <div 
                className="bg-white p-16 rounded shadow-2xl w-2/3
                            flex flex-col items-center justify-center">

                <h2 className="text-3xl font-bold mb-8 text-purple-700">
                    Have already an Account?
                </h2>

                <button 
                    className="block w-full bg-yellow-600 
                                hover:bg-yellow-300 p-4 rounded 
                                text-purple-700 transition duration-300
                                hover:text-purple-500"> Log in </button>

            </div>


        </div>
    )
}


export default FishSales
