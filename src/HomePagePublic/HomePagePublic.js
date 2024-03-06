import React from 'react';
import {useHistory} from "react-router-dom";

function HomePagePublic() {
    const history = useHistory();

    const goToPageLogin = () => {
        history.push("../Login/Login");
    }

    return (
        <div className="HomePagePublic">
            <h1>Home Page Public View</h1> 
            <p>Welcome To The Assignment Review App</p> 
            <button className ="btn" onClick={goToPageLogin}>Login</button>
        </div>
    );


    
};

export default HomePagePublic;