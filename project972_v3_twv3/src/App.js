// import React from 'react'
import './input.css';
import './App.css';

// import { useNavigate } from 'react-router'



function App() {
  // const navigate = useNavigate();
  return (
    <div className="bg-black h-screen w-screen flex flex-col justify-center items-center">
      Hello from Main page
      <button className="h-1/6 bg-black hover:bg-blue-500 
                            text-white font-bold 
                            py-2 px-4 border border-gray-400 rounded 
                            shadow-2xl shadow-indigo-500/50"
                    onClick={() => {
                // navigate("/registration")
            }}>
                Vini Ba Nou Foss La
        </button>
    </div>
  );
}

export default App;
