import React, { useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = React.useContext(UserContext);

    const handleLogin = (e) => {
        if(!username || !password) {
            alert("Please enter both username and password");
            return;
        }
        e.preventDefault();
        setUser({ username, password });
        setUsername("");
        setPassword("");
    }

    return (
        <div>
            <h2>Login</h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
            {"  "}
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;
