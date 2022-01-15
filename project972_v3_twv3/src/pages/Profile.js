import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
 
function Profile() {
    const navigate = useNavigate();
    const { username } = useParams();
    return (
        <div>
            Profile Page
            This is the profile page for {username} !

            <div>
                <button onClick={() => {navigate("/about")} }>
                    Change to about
                </button>
            </div>

        </div>

        
    )
}

export default Profile
