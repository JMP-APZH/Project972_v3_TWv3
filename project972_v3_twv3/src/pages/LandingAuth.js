import React from 'react'
import { useNavigate } from 'react-router'

const LandingAuth = () => {
    const navigate = useNavigate();
    return (

        <div className="flex flex-col justify-around items-center
                        h-screen w-screen 
                        bg-black
                        text-yellow-500">
            
            <div 
                className="flex flex-col 
                            text-5xl
                            pt-8">
                Kontan Wè Zot'
            </div>

            {/* <ul 
                className="text-box1
                            flex flex-col 
                            justify-center items-center
                            box-border h-48 w-72
                            py-2 px-4 border border-gray-400 rounded 
                            ">
                <br />
                <li>Project Balan Matinik</li>
                <li>...</li>
                <li>Option n</li>
            </ul> */}
            
            

            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-3 gap-20 content-between">

                    <div>
                        <ul 
                            className="text-box1bis
                                        flex flex-col 
                                        justify-center items-center
                                        box-border h-36 w-48
                                        
                                        rounded 
                                        ">
                            <li 
                                className="text-3xl text-center"
                                > 
                                <p>Fierté</p> 
                                <p 
                                    className="italic text-2xl text-center"
                                    >
                                        par le Progrès </p> 
                                </li>
                        </ul>
                    </div>

                    <div>
                        <ul 
                            className="text-box2
                                        flex flex-col 
                                        justify-center items-center
                                        box-border h-36 w-48
                                        py-2 px-4 rounded
                                         
                                        ">
                            <li 
                                className="text-3xl text-center"
                                > 
                                <p>Autonomie</p> 
                                <p 
                                    className="italic text-2xl text-center"
                                    >
                                        par notre Solidarité </p> 
                                </li>
                        </ul>
                    </div>

                    <div>
                        <ul 
                            className="text-box3
                                        flex flex-col 
                                        justify-center items-center
                                        box-border h-36 w-48
                                        py-2 px-4 rounded
                                        0 
                                        ">
                            <li 
                                className="text-3xl text-center"
                                > 
                                <p>Prospérité</p> 
                                <p 
                                    className="italic text-2xl text-center"
                                    >
                                        par la force de notre Culture </p> 
                                </li>
                        </ul>
                    </div>

                    
            </div>

            </div>

            <div>
                <ul 
                    className="text-box1
                                flex flex-col 
                                justify-center items-center
                                box-border h-48 w-72
                                py-2 px-4 rounded
                                 
                                text-center">
                    <li className="text-2xl">Project Balan Matinik</li>
                    <br />
                    <li> Le Destin d'un Peuple </li>
                    <li> S'Organise Ensemble </li>
                    <li> et Se Prend en Main</li>
                </ul>
            </div> 

            <div className="pb-8">
                        <button className="button-box3 
                                    bg-black hover:bg-blue-500 
                                    text-white font-bold 
                                    py-2 px-4 border border-gray-400 rounded 
                                    "
                                onClick={() => {
                                    navigate("/registration")
                                }}>
                            Vini Ba Nou Foss La
                        </button>
                </div>           

        </div>
    )
}

export default LandingAuth
