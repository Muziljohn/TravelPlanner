import React, { useState, useEffect } from "react";
import AdminDashobard from "../components/AdminDashobard";
import axios from "axios";
function Transport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/admin/");

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [setData]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/admin/user/${id}`);
      //setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <AdminDashobard>
      <div className="col-10 p-3 bg-light" style={{ height: "100vh" }}>
        <h3 style={{ fontWeight: "600" }}>Transport</h3>
        <hr />
        <div className="container">
          <div className="row mb-4 mt-4">
            <div className="col-lg-12 col-sm-8">
              <div className="float-right-md">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search Vehicle"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" className="btn btn-outline-primary ">
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                      Transport List
                    </h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>

                          <th>Phone</th>
                          <th>cnic</th>
                          <th>route</th>
                          <th>Bus Type</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((item, index) => {
                          {
                            return item.transportBooking.map((i) => {
                              return (
                                <tr className="border-bottom mb-6">
                                  <td>{i.name}</td>
                                  <td>{i.email}</td>
                                  <td>{i.contactNumber}</td>
                                  <td>{i.cnic} </td>
                                  <td>{i.route}</td>
                                  <td>{i.busType}</td>
                                  <td>{i.arrivalDate}</td>
                                  <td></td>
                                </tr>
                              );
                            });
                          }
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

export default Transport;
