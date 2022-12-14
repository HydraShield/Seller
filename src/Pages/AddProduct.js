import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");

    const submit = () => {
        console.log(name, price, quantity, description)
        try {
            axios.post("http://localhost:3030/seller/addProduct", { name: name, price: price, quantity: quantity, description: description })
                .then((res) => {
                    if (res.status === 200) {
                        alert("product has been added")
                    }
                    else {
                        alert("Product addition fail")
                    }
                })
        } catch (error) {
            alert("Server Problem")
            console.log(error)
        }
    }

    return (
        <div className="inv-container">
            <div className="inv-add">
                <h2>Click here for Inventory</h2>
                <button className="inv-add-btn" onClick={() => { navigate("/inventory") }}>Inventory</button>
            </div>
            <div className="add-form">
                <h1>Fill information about new product</h1>
                <label>Product Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="...name" /><br />
                <label>Product Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="...price" /><br />
                <label>Product Quantity</label>
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="...quantity" /><br />
                <label>Product Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="...description" /><br />
                <button className="add-btn" onClick={submit} type="submit">Submit</button><br />
            </div>
        </div>
    )
}