import axios from "axios";
import { useEffect, useState } from "react";
import { NavBar } from "../Components/NavBar";
import "./Styles.css"

export const Profile = () => {

    const [data, setData] = useState({ name: "", email: "", contact: "" });

    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [contact, setContact] = useState(data.contact);

    const submit = () => {
        console.log(email, name, contact)
        try {
            axios.put("http://localhost:3030/seller/updateProfile", { name: name, email: email, contact: contact })
                .then((res) => {
                    if (res.status === 200) {
                        alert("Profile Updated")
                        setData({ name: name, email: email, contact: contact })
                    }
                    else {
                        alert("update fail")
                    }
                })
        } catch (error) {
            alert("update fail")
            console.log(error)
        }
    }

    useEffect(() => {
        axios.get("http://localhost:3030/seller/profile")
            .then((res) => {
                setData(res.data)
                setName(res.data.name)
                setContact(res.data.contact)
                setEmail(res.data.email)
            })
    }, []);
    return (
        <div>
            <NavBar/>
            <div className="profile">
                <h1>Seller Profile</h1>
                <div className="profile-data">
                    <div className="profile-info">
                        <label>Name : {data.name}</label><br />
                    </div>
                    <div className="profile-info">
                        <label>Email : {data.email}</label><br />
                    </div>
                    <div className="profile-info">
                        <label>Contact : {data.contact}</label><br />
                    </div>
                </div>


                <div className="auth-form-container">
                    <h2>To Update data</h2>
                    <label>Name : </label><br />
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="...name" /><br />
                    <label>Email : </label><br />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="...email" /><br />
                    <label>Contact :</label><br />
                    <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="...contact" /><br />
                    <button className="profile-btn" onClick={submit} type="submit">Update</button>
                </div>
            </div>
        </div>
    );
}