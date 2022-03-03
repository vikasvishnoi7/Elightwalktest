import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Item() {
    const [item, setitem] = useState({
        id: "",
        title: "",
        description: "",
        price: "",

    });
    const { ids } = useParams();
    useEffect(() => {
        loadItems();
    }, []);
    const loadItems = async () => {
        const res = await axios.get(`http://localhost:3003/products/${ids}`);
        setitem(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <h1 className="display-4">item Id: {ids}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">id: {item.id}</li>
                <li className="list-group-item">title name: {item.title}</li>
                <li className="list-group-item">description: {item.description}</li>
                <li className="list-group-item">price: {item.price}</li>

            </ul>
        </div>
    );
}

export default Item
