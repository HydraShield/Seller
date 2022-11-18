import { useState } from "react";
import axios from "axios";
import "./Styles.css"
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    const navigate = useNavigate()

    const submit = () => {
        console.log(email, password, name)
        if(password!==password2){
            alert("please check password")
            return;
        }
        try {
            axios.post("http://localhost:3030/seller/addSeller", {name: name, email: email, password: password, contact: contact })
                .then((res) => {
                    if (res.status === 200) {
                        alert("account created")
                        navigate("/login")
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
                <h1>SignUp for Seller</h1>
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="...name" required="true" /><br />
                <label>Contact :</label><br />
                <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="...contact" required="true" /><br />
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="...email" required="true"  /><br />
                <label>password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="...password" required="true"  /><br />
                <label>Confirm Password</label>
                <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="...password" required="true"  /><br />
                <button onClick={submit} type="submit">Signup</button><br />
                <Link to="/login">alredy have an account, click here for login</Link>
            </div>
        </div>
    );
}