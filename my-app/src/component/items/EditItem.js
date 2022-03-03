import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
function EditItem() {
    const { ids } = useParams();
    console.log(ids)
    let navigate = useNavigate()
    const [item, setitem] = useState({
        id: "",
        title: "",
        description: "",
        price: "",

    });

    const { id, title, description, price } = item;
    const onInputChange = e => {
        setitem({ ...item, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/products/${ids}`, item);
        navigate("/");
    };

    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/products/${ids}`);
        setitem(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit item</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter id"
                            name="id"
                            value={id}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter title"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="description"
                            placeholder="description"
                            value={description}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Enter price"
                            name="price"
                            value={price}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button className="btn btn-primary btn-block">Add item</button>
                </form>
            </div>
        </div>
    )
}

export default EditItem