import React from 'react'

const Registration = () => {
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
                    Create Your Account
                </h2>

                <form className="space-y-5">
                    
                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Alias / Username 
                        </label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>
                    
                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Firstname 
                        </label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Lastname 
                        </label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Birthdate - actually just the year should be enough 
                        </label>
                        <input 
                            type="date" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Email 
                        </label>
                        <input 
                            type="email"
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500" 
                        />
                    </div>

                    <div>
                        <label 
                            className="block mb-1 font-bold text-gray-500"> 
                            Password 
                        </label>
                        <input 
                            type="password"
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500" 
                            />
                    </div>

                    <div>
                        <label 
                            className="block mb-1 font-bold text-gray-500"> 
                            Password confirmation 
                        </label>
                        <input 
                            type="password"
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500" 
                            />
                    </div>

                    <div>
                        <label 
                            className="block mb-1 font-bold text-gray-500"> 
                            Confirmation Code (Received per Email)
                        </label>
                        <input 
                            type="password"
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500" 
                            />
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="agree" className="mr-2"/>
                        <label for="agree" className="ml-2 text-gray-700 text-sm"> 
                           I agree to the terms and privacy 
                        </label>
                        
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

export default Registration
