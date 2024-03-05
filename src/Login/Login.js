import React, {useState} from 'react';

const handleSubmit = (e) => {
    e.preventDefault();
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <>
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                <h2>Enter Your Username: </h2>
                {/* This is an input element for entering the username. 
                Its value is controlled by the username state variable allocated above, 
                The setUsername function updates the username state whenever the input changes */}
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br/>
                <h2>Enter Your Password: </h2> 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className ="btn">Click to Login</button>
            </form>
        </>
    );
};

export default Login;
