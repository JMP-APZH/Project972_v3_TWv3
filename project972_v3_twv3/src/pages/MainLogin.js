import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from 'react-router'


const MainLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = async (e) => {
        e.preventDefault();
        const { data } = await axios.post(
          `http://127.0.0.1:8000/backend/api/auth/token/`,
          {
            email,
            password,
          }
        );
        localStorage.setItem("token", data.access);
        navigate("/home")
        window.location.reload();
    };

    return (
        <div 
        className="bg-wave-img bg-cover 
                    h-screen w-screen 
                    flex flex-col justify-center items-center
                    " 
        >

            <h2 
            className='text-3xl text-yellow-500'>
                Pwason Matinik
            </h2>
            
            <p 
            className="text-2xl my-5 text-black text-bold italic">
                La Force pour nos Pêcheurs
            </p>

            <div 
            className="container 
                        h-96 w-96 bg-green-800 bg-opacity-20 rounded-2xl shadow-5xl 
                        relative z-2 border border-opacity-30 border-r-0 border-b-0 
                        backdrop-filter">

                <form className='h-full flex flex-col justify-evenly items-center'
                        onSubmit={(e) => submitLogin(e)}>
                    <div className='text-red-800 font-poppins text-2xl tracking-widest flex flex-col justify-center items-center'>
                        <p>Sésame</p>
                        <p>vers la Richesse</p>
                        <p>de la Mer</p>

                    </div>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='Email' 
                        className='input-text text-white bg-black'/>

                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder='password' 
                        className='input-text text-white bg-blue-800'/>

                    <button onClick={(e) => submitLogin(e)} 
                            className='w-60 p-7 cursor-pointer font-poppins 
                                        rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                                        hover:bg-white hover:bg-opacity-80'>
                                        Kontinué
                    </button>
                </form>

                
            
            </div>

        </div>
    )
}

export default MainLogin
