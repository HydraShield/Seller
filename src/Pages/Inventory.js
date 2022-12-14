import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../Components/DataTable";
import { NavBar } from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { tableCustomStyles } from "../TableStyle/TableStyle";

export const Inventory = () => {
    const [items, setItems] = useState([]);
    const  navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3030/seller/getProducts")
            .then((res) => {
                console.log(res)
                setItems(res.data)
            })
    }, []);

    return (
        <div>
            <NavBar />
            <div className="inv-add">
                <h2>Press here to add new Product</h2>
                <button className="inv-add-btn" onClick={() => {navigate("/addProduct")}}>App Product</button>
            </div>
            <div className="inventory-box">
                <DataTable rows={items} />
            </div>
        </div>
    )

}