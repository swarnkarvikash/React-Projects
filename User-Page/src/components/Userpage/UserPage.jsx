import { useState } from 'react';
import './UserPage.css';

function UserPage(){

    const [login, setLogin] = useState(true);

    const loginSwitch = () => {
        setLogin(!login);
    }


    return(
        <div id="container">
            <div id="user">
                <img id="insta" src="src\assets\instagram.png" alt="" />
                <input hidden={login} id="Mobile" type="text" placeholder="Mobile Number or Email" />
                <input hidden={login} id="Fullname" type="text" placeholder="Full Name" />
                <input type="email" placeholder="Phone number, username, or email" />
                <input type="text" placeholder="Password" />
                <button> {login ? "Sign in" : "Sign up"} </button>
            
            <div id="footer">
                {login ? "Don't have account?" : "have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
            </div>
            </div>

        </div>
    )
}

export default UserPage;