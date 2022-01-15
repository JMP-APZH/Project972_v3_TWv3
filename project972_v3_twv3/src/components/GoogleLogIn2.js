import React from 'react'
import { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'


export default function GoogleLogIn2() {

    const clientID = "623814960583-1ki73p5qo382c9i5093r4llto9hk3372.apps.googleusercontent.com";
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success', res.profilObj);
        setShowLoginButton(false); // disable the login button and show the logout button
        setShowLogoutButton(true);
    }

    const onFailureSuccess = (res) => {
        console.log('Login Failed', res.profilObj);
    }

    const onSignoutSuccess = () => {
        alert("Signed out successful, Fuck off Gopnik!");
        setShowLoginButton(true); 
        setShowLogoutButton(false); // disable the logout button and show the login button
        console.clear();
    }


    return (
        <div className=''>
            {/* className="top-1/2 left-1/2 -mt-12 -ml-12" */}
            { showLoginButton ? 
                <GoogleLogin
                    clientId={ clientID }
                    buttonText="Login with Google"
                    onSuccess={ onLoginSuccess }
                    onFailure={ onFailureSuccess }
                    cookiePolicy={'single_host_origin'}
                    className='w-60 cursor-pointer font-poppins 
                    rounded-full px-5 py-1 bg-yellow-500 bg-opacity-50 
                    hover:bg-yellow-500 hover:bg-opacity-80'
                /> : null
            }

            <div className=''>
            { showLogoutButton ?
                
                
                    <GoogleLogout
                        clientId={ clientID }
                        buttonText="Welcome Jean-Marie"
                        onLogoutSuccess={ onSignoutSuccess }
                    /> : null
            }
            </div>

        </div>
    )
}

