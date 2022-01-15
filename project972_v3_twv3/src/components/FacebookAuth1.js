import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react'
// import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

const FacebookAuth1 = () => {
    
    const [showHome, setShowHome] = useState(false);
    // const [showLogoutButton, setShowLogoutButton] = useState(false);
    
    const responseFacebook = (response) => {
        console.log(response);
        setShowHome(true)
    }

    // absolute top-1/2 left-1/2 -mt-12 -ml-12

    return (
        <div className="">
        {/* className="h-screen w-screen flex justify-center items-center top-1/2"> */}
            { showHome ? 
                <h2 
                    className="text-2xl text-bold">
                        Welcome to Poisson 972 Web App, You are logged in with Facebook
                </h2> :
                <FacebookLogin
                    appId="496718368273732"
                    // autoLoad={true}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook}
                    // cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                    // icon={<TiSocialFacebookCircular />}
                />
            
            }
        </div>
    )
}

export default FacebookAuth1
