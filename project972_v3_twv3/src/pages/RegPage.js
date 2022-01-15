import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from 'react-router'

const RegPage = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const submitRegister1 = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/backend/api/registration/`, {
          email: email,
        });
        navigate("/registrationconf")
      };

    return (
        <div>
            
                    <div 
                        className="bg-wave-img bg-cover 
                                    h-screen w-screen 
                                    flex flex-col justify-center items-center" 
                    >

                        <h2 
                            className='text-3xl text-yellow-500'>
                                Pwason Matinik
                        </h2>
                        
                        <p 
                            className="text-2xl my-5 text-black text-bold italic">
                                La Force pour nos Pêcheurs
                        </p>

                        <form
                            onSubmit={(e) => submitRegister1(e)}
                            >
                            <div 
                                className='flex flex-col justify-center items-center'>

                                <div>
                                    <label className="block mb-1 font-bold text-gray-500"> 
                                        Please enter your Email 
                                    </label>
                                    <input 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        className="w-full border-2 border-gray-200 p-3 rounded 
                                                outline-none focus:border-purple-500" 
                                    />
                                </div>

                                <br />

                                <button
                                    onClick={(e) => submitRegister1(e)}
                                    // onClick={() => setPageState("login")}
                                    className='w-60 p-7 cursor-pointer font-poppins 
                                                rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                                                hover:bg-white hover:bg-opacity-80'>
                                                    Vini Ba Nou Foss La
                                                    <br />
                                                    Kréé an Kont'
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
    )
}

export default RegPage
