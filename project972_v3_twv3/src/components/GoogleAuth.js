import React from 'react'
import GoogleLogin from 'react-google-login'


// onSuccess={ this.responseGoogle }
// onFailure={ this.responseGoogle }

const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
}

const GoogleAuth = () => {   
    return (
        <div>
            <GoogleLogin
                clientID='705286225607-qgr6mf19b01bsd8gho85lhil0khs5219.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={ responseGoogle }
                onFailure={ responseGoogle }
                cookiePolicy={ 'single_host_origin' }
                >
                

            </GoogleLogin>
            
        </div>
    )
}

export default GoogleAuth
