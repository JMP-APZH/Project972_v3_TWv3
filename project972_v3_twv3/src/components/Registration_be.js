// import React, { useState } from 'react'

// const Registration_be = () => {

//     // const state = {
//     //     credentials: {email:"", password:""}
//     // }

//     // const [state, setState] = credentials({email:"", password:""})

//     const login = e => {
//         console.log(state.credentials);
//     }

//     const inputChanged = e => {
//         const cred = state.credentials;
//         cred[e.target.name] = e.target.value;
//         setState({credentials: cred});
//     }

//     return (
//         <div className="w-full flex flex-col items-center p-7">
//             <h1 className="text-2xl font-bold text-blue-700">Login Page</h1>
//             <br />

//                         {/* <!-- component -->
//             <!-- This is an example component --> */}
//             <div className="max-w-2xl mx-auto">
//                 <div
//                     className="bg-white shadow-md border border-gray-200 
//                                 rounded-lg max-w-lg p-4 sm:p-6 lg:p-8 
//                                 dark:bg-gray-800 dark:border-gray-700">
//                     <form className="space-y-6" action="#">
//                         <h3 className="text-xl font-medium text-gray-900 
//                                         dark:text-white"
//                             >
//                                 Sign in to our platform
//                         </h3>
                        
//                         <div>
//                             <label 
//                                 for="email" 
//                                 className="text-sm font-medium text-gray-900 
//                                             block mb-2 
//                                             dark:text-gray-300"
//                                 >
//                                     Your email
//                             </label>
                            
//                             <input 
//                                 type="email" 
//                                 name="email" 
//                                 id="email"
//                                 placeholder="name@company.com"
//                                 value={state.credentials.email}
//                                 onChange={inputChanged}
//                                 className="bg-gray-50 border border-gray-300 
//                                         text-gray-900 sm:text-sm rounded-lg 
//                                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
//                                         dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  
//                                 required="" />
//                         </div>
//                             <div>
//                                 <label 
//                                     for="password" 
//                                     className="text-sm font-medium text-gray-900 
//                                                 block mb-2 
//                                                 dark:text-gray-300"
//                                 >
//                                     Your password
//                                 </label>
                                
//                                 <input 
//                                     type="password" 
//                                     name="password" 
//                                     id="password"
//                                     placeholder="••••••••"
//                                     value={state.credentials.email}
//                                     onChange={inputChanged} 
//                                     className="bg-gray-50 border border-gray-300 
//                                             text-gray-900 sm:text-sm rounded-lg 
//                                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
//                                             dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
//                                     required="" />
//                             </div>
//                                 <div className="flex items-start">
//                                     <div className="flex items-start">
//                                         <div className="flex items-center h-5">
//                                             <input 
//                                                 id="remember" 
//                                                 aria-describedby="remember" 
//                                                 type="checkbox" 
//                                                 className="bg-gray-50 border border-gray-300 focus:ring-3 
//                                                         focus:ring-blue-300 h-4 w-4 rounded 
//                                                         dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
//                                                 required="" />
//                                         </div>
//                                             <div className="text-sm ml-3">
//                                                 <label for="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
//                                             </div>
//                                         </div>
//                                         <a href="#" class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost
//                                             Password?</a>
//                                     </div>
//                                     <button 
//                                         type="submit" 
//                                         class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
//                                             focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
//                                             dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                                         >
//                                         Login to your account
//                                     </button>

//                                     <div 
//                                         class="text-sm font-medium text-gray-500 dark:text-gray-300">
//                                             Not registered? 
//                                         <a 
//                                             href="#" 
//                                             className="ml-3 text-blue-700 hover:underline dark:text-blue-500"
//                                             >
//                                                 Create account
//                                         </a>
//                                     </div>
//                     </form>
//                 </div>

//                 <div className="mt-5 max-w-lg text-center">
//                     <p>
//                             This card component is part of a larger, 
//                             open-source library of Tailwind CSS components. 
//                             Learn more by going to the official 
//                     <a 
//                         className="text-blue-600 hover:underline ml-2"
//                         href="https://flowbite.com/docs/getting-started/introduction/" 
//                         target="_blank"
//                         >
//                             Flowbite Documentation
//                     </a>.
//                     </p>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Registration_be
