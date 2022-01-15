import React from 'react'
import { useNavigate } from 'react-router'

const LandingAuth = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center
                        h-screen w-screen 
                        bg-black
                        text-yellow-500">
            <div className="text-5xl">
                Kontan Wè Zot'
            </div>
            

            <br />

            <ul className="flex flex-col justify-center items-center">
                <br />
                <li>Project Balan Matinik</li>
                <li>...</li>
                <li>Option n</li>
            </ul>

            <br />

            <button className="bg-blue-500 hover:bg-blue-400
                                text-white font-bold 
                                py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => {
                navigate("/registration")
            }}>
                Vini Ba Nou Foss La
            </button>

            <br />

            <button className="bg-black hover:bg-blue-500 
                            text-white font-bold 
                            py-2 px-4 border border-gray-400 rounded 
                            shadow-lg shadow-indigo-500/50"
                    onClick={() => {
                navigate("/registration")
            }}>
                Vini Ba Nou Foss La
            </button>

        </div>
    )
}

export default LandingAuth
