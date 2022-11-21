import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../Components/DataTable";
import { NavBar } from "../Components/NavBar";

export const Inventory = () => {
    const [items, setItems] = useState([]);

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
            <div className="inventory-box">
                <DataTable rows={items} />
            </div>
        </div>
    )

}