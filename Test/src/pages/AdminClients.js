import axios from "axios";
import React, { useEffect, useState } from "react";

import AdminDashobard from "../components/AdminDashobard";

function AdminClients() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("/admin/");
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/admin/user/${id}`);
      //setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log("error");
    }
  };
  console.log(data);

  return (
    <AdminDashobard>
      <div className="col-10 p-3 bg-light" style={{ height: "100vh" }}>
        <h3 style={{ fontWeight: "600" }}>Users</h3>
        <hr />
        <div className="container">
          <div className="row mb-4 mt-4">
            <div className="col-lg-12 col-sm-8 ">
              <div
                className="card "
                style={{
                  borderRadius: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  hover: {
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
                  },
                }}
              >
                <div className="card-body">
                  <div className="card-title">
                    <h4 style={{ fontSize: "18px", fontWeight: "400" }}>
                      Clients List
                    </h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone</th>

                          <th>Email</th>
                          <th>Id</th>
                          <th>Delete user</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => {
                          return (
                            <tr className="border-bottom mb-6">
                              <td>{item.name}</td>
                              <td>09078654321</td>
                              <td>{item.email}</td>
                              <td>{item._id}</td>
                              <td>
                                <button
                                  className="btn btn-danger btn-sm btn-hover-bg-shade-amount:20%"
                                  onClick={() => handleDelete(item._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminDashobard>
  );
}

export default AdminClients;
