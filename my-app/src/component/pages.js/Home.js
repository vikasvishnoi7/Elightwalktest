import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"
import { useNavigate, } from 'react-router-dom';
function Home() {
  let navigate = useNavigate()

  const [items, setItems] = useState([]);

  console.log(items)
  useEffect(() => {
    loadproducts();
  }, [])
  const loadproducts = async () => {
    const res = await axios.get("http://localhost:3003/products");
    // console.log(res.data)
    setItems(res.data)
  }
  const deleteItem = async id => {
    await axios.delete(`http://localhost:3003/products/${id}`);
    loadproducts();
  };
  return (
    <>
      {items.length == 0 ? <h1>OutOfSctockProduct</h1> :
        <div className="container">
          <div className="py-4">
            <h1>Home Page</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">title</th>
                  <th scope="col">description Name</th>
                  <th scope="col">price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  items.map((item, i) => (
                    <tr key={i}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>

                        <button type="button" className="btn btn-outline-primary">
                          <Link to={`/items/${item.id}`}>View</Link>
                        </button>
                        <button type="button" className="btn btn-outline-primary">
                          <Link to={`/items/edit/${item.id}`}>Edit</Link>
                        </button>
                        <button type="button" className="btn btn-danger" onClick={() => deleteItem(item.id)}>
                          <Link to="/">Delete</Link>
                        </button>

                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

      }
    </>
  )
}

export default Home

/**
 * <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">description Name</th>
              <th scope="col">price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item,i) => (
              <tr key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  {/* <Link class="btn btn-primary mr-2" to={`/users/${item.id}`}>
                    View
                  </Link> */
/* <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${item.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    // onClick={() => deleteUser(item.id)}
                  >
                    Delete
                  </Link> *
                </td >
              </tr >
            ))}
          </tbody >
        </table >
      </div >
    </div >
 */