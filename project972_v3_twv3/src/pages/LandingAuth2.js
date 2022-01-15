import React from 'react'
import { useNavigate } from 'react-router'

const LandingAuth2 = () => {
    const navigate = useNavigate();
    return (
        <div 
      className="bg-black text-white h-screen w-screen 
                  flex flex-col justify-between items-center
                  p-12">
      Hello from Main page

        <button className="h-1/6 bg-black hover:bg-blue-500 
                              text-white font-bold 
                              py-2  px-4 border border-gray-400 rounded 
                              shadow-2xl shadow-indigo-500/50"
                      onClick={() => {
                  // navigate("/registration")
              }}>
                  Vini Ba Nou Foss La
          </button>

          <button className="button-box2 h-1/6 bg-black hover:bg-blue-500 
                              text-white font-bold 
                              py-2 px-4 border border-gray-400 rounded"
                      onClick={() => {
                  // navigate("/registration")
              }}>
                  Vini Ba Nou Foss La
          </button>

          <button className="button-box h-1/6 bg-black hover:bg-blue-500 
                              text-white font-bold 
                              py-2 px-4 border border-gray-400 rounded"
                      onClick={() => {
                  // navigate("/registration")
              }}>
                  Vini Ba Nou Foss La
          </button>

    </div>
    )
}

export default LandingAuth2
