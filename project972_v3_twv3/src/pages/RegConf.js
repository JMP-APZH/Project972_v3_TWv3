import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from 'react-router'


const RegConf = () => {
    
    const navigate = useNavigate();

    return (
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

                <form>
                    {/* onSubmit={() => setPageState("register3")} */}
                    <div className="titleWrapper">
                        <h2>You just registered</h2>
                    </div>
                    <div className="inputWrapper">
                        <p>
                            Thank you for registering! <br />
                            We have sent you an E-mail with your registration code, <br />{" "}
                            please enter this code on the next page to complete the
                            registration process.
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate("/regform")} 
                            className='w-60 p-7 cursor-pointer font-poppins 
                                        rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                                        hover:bg-white hover:bg-opacity-80'>
                                        Kontinué
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default RegConf
