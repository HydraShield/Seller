import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "../Components/NavBar";
import DataTableOrders from "../Components/DataTableOrders";

export const Order = () => {
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3030/seller/getProducts")
            .then((res) => {
                setOrder(res.data)
            })
    }, []);

    return (
        <div>
            <NavBar/>
            <div className="inventory-box">
                <DataTableOrders rows={orders} />
            </div>
        </div >
    )

}