import { useState } from "react";
import axios from "axios";
import "./Styles.css"
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const submit = () => {
        console.log(email, password)
        try {
            axios.post("http://localhost:3030/seller/login", { email: email, password: password })
                .then((res) => {
                    if (res.status === 200) {
                        alert("login pass")
                        navigate("/inventory")
                    }
                    else {
                        alert("login fail")
                    }
                })
        } catch (error) {
            alert("login fail")
            console.log(error)
        }
    }

    return (
        <div>
            <div className="auth-form-container">
                <h1>Login for Seller</h1>
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="...email" /><br />
                <label>password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="...password" /><br />
                <button onClick={submit} type="submit">Login</button><br />
                <Link to="/signup">click here for create new account</Link>
            </div>
        </div>
    );
}