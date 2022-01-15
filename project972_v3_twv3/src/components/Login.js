import React from 'react';
import wave2 from '../assets/wave2.png';
import FacebookAuth1 from './FacebookAuth1';
import GoogleLogIn2 from './GoogleLogIn2';

const Login = () => {
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

                <form className='h-full flex flex-col justify-evenly items-center'>
                    <div className='text-red-800 font-poppins text-2xl tracking-widest flex flex-col justify-center items-center'>
                        <p>Sésame</p>
                        <p>vers la Richesse</p>
                        <p>de la Mer</p>

                    </div>
                    <input 
                        type="email" 
                        placeholder='Email' 
                        className='input-text text-white bg-black'/>

                    <input 
                        type="password" 
                        placeholder='password' 
                        className='input-text text-white bg-blue-800'/>
                    
                    <input type="Submit" 
                            value="Konèkté Kow'" 
                            className='w-60 cursor-pointer font-poppins 
                            rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                            hover:bg-white hover:bg-opacity-80'/>
                </form>

                
            
            </div>

            <div className="flex flex-col justify-center items-center p-7 w-96">
            
                <div className='top-0 right-0 rounded-3xl'>
                    <GoogleLogIn2 />
                </div>

                <br></br>

                <div>
                    <FacebookAuth1 />

                </div>

            </div>

            <div 
                className='flex flex-col justify-center items-center'>

            <button 
            className='w-60 p-7 cursor-pointer font-poppins 
                        rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                        hover:bg-white hover:bg-opacity-80'>
                            Vini Ba Nou Foss La
                            <br />
                            Kréé an Kont'
            </button>

            </div>

        </div>
    )
}

export default Login
