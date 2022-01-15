
import FacebookAuth1 from '../components/FacebookAuth1';
import GoogleLogIn2 from '../components/GoogleLogIn2';

import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';



const Auth = () => {
    const [pageState, setPageState] = useState("login");
    // const navigate = useNavigate();
    // const theme = useTheme();
    const [username, setUsername] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [birth, setBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [code, setCode] = useState("");


    const submitRegister1 = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/backend/api/registration/`, {
          email: email,
        });
        setPageState("register2");
      };

    const submitRegister3 = async (e) => {
        e.preventDefault();
        await axios.post(
            `http://127.0.0.1:8000/backend/api/registration/validation/`,
            {
            username,
            first_name: first,
            last_name: last,
            birth,
            email,
            password,
            password_repeat: password2,
            code,
            }
        );
        setCode("");
        setPassword("");
        setPassword2("");
        setEmail("");
        setPageState("login");
    };

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
        setPageState("login");
        window.location.reload();
    };
    
    
    

    const pageType = () => {
        if (pageState === "register1") {
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

                                <button
                                    onClick={(e) => submitRegister1(e), setPageState("register2")}
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
            );
        } else if (pageState === "register2") {
            return(

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
                    onSubmit={() => setPageState("register3")}>
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
                            onClick={() => setPageState("register3")} 
                            className='w-60 p-7 cursor-pointer font-poppins 
                                        rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                                        hover:bg-white hover:bg-opacity-80'>
                                        Kontinué'
                        </button>
                    </div>
                </form>
            </div>
            );
        } else if (pageState === "register3") {
            return(

                <div className="min-h-screen flex flex-col items-center justify-center space-y-5
                                bg-blue-400 bg-cover p-5">
                    
                    <div className="bg-white p-16 rounded shadow-2xl
                            w-2/3">

                        <h2 
                            className="text-3xl font-bold mb-8 text-purple-700
                                        flex items-center justify-center">
                            Create Your Account
                        </h2>

                        <form 
                            className="space-y-5"
                            onSubmit={(e) => submitRegister3(e)}>
                            
                            <div>
                                <label className="block mb-1 font-bold text-gray-500"> 
                                    Alias / Username 
                                </label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}                       
                                    type="text" 
                                    className="w-full border-2 border-gray-200 p-3 rounded 
                                            outline-none focus:border-purple-500"/>
                            </div>
                            
                            <div>
                                <label className="block mb-1 font-bold text-gray-500"> 
                                    Firstname 
                                </label>
                                <input
                                    value={first}
                                    onChange={(e) => setFirst(e.target.value)}                      
                                    type="text" 
                                    className="w-full border-2 border-gray-200 p-3 rounded 
                                            outline-none focus:border-purple-500"/>
                            </div>

                            <div>
                                <label className="block mb-1 font-bold text-gray-500"> 
                                    Lastname 
                                </label>
                                <input
                                    value={last}
                                    onChange={(e) => setLast(e.target.value)}                      
                                    type="text" 
                                    className="w-full border-2 border-gray-200 p-3 rounded 
                                            outline-none focus:border-purple-500"/>
                            </div>

                            <div>
                                <label className="block mb-1 font-bold text-gray-500"> 
                                    Birthdate - actually just the year should be enough 
                                </label>
                                <input
                                    value={birth}
                                    onChange={(e) => setBirth(e.target.value)}                       
                                    type="date" 
                                    className="w-full border-2 border-gray-200 p-3 rounded 
                                            outline-none focus:border-purple-500"/>
                            </div>

                            <div>
                                <label className="block mb-1 font-bold text-gray-500"> 
                                    Email 
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}                   
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}                       
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
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}                       
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
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}                       
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
                            onClick={(e) => submitRegister3(e)} 
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
            );
        } else if (pageState === "login") {
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

                <div 
                    className="container 
                                h-96 w-96 bg-green-800 bg-opacity-20 rounded-2xl shadow-5xl 
                                relative z-2 border border-opacity-30 border-r-0 border-b-0 
                                backdrop-filter">

                    <form
                        onSubmit={(e) => submitLogin(e)} 
                        className='h-full flex flex-col justify-evenly items-center'>
                        <div className='text-red-800 font-poppins text-2xl tracking-widest flex flex-col justify-center items-center'>
                            <p>Sésame</p>
                            <p>vers la Richesse</p>
                            <p>de la Mer</p>

                        </div>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}               
                            type="email" 
                            placeholder='Email' 
                            className='input-text text-white bg-black'/>

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}                             
                            type="password" 
                            placeholder='password' 
                            className='input-text text-white bg-blue-800'/>
                        
                        <input 
                                onSubmit={(e) => submitLogin(e)}
                                type="Submit" 
                                value="Konèkté Kow'" 
                                className='w-60 cursor-pointer font-poppins 
                                rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                                hover:bg-white hover:bg-opacity-80'/>
                    </form>

                
            
                </div>

            </div>
        } 
    } 

    return (

        <div>
            {/* <div className='bg-wave-img bg-cover
                            h-screen w-screen
                            flex flex-col justify-center items-center'>

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
                                Email 
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="w-full border-2 border-gray-200 p-3 rounded 
                                        outline-none focus:border-purple-500" 
                            />
                        </div>

                        <button
                            onClick={(e) => submitRegister1(e)} 
                            className='w-60 p-7 cursor-pointer font-poppins 
                                        rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                                        hover:bg-white hover:bg-opacity-80'>
                                            Vini Ba Nou Foss La
                                            <br />
                                            Kréé an Kont'
                        </button>

                    </div>
                </form> */}
                <div>
                    {pageType()}
                </div>
                
            </div>


    )
}

export default Auth
