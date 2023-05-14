import React, { useState, useEffect } from "react";
import AdminDashobard from "../components/AdminDashobard";
import axios from "axios";
function Transport() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [Id, setId] = useState();
  const [resturant, setResturant] = useState({
    name: undefined,
    email: undefined,
    cnic: undefined,
    contactNumber: undefined,
    route: undefined,
    busType: undefined,
    arrivalDate: undefined,
    customerNote: undefined,
  });
  const handleChange = (e) => {
    setResturant((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async () => {
    try {
      console.log(Id);
      console.log(resturant);
      const data = axios.put(`/admin/transportBooking/${Id}`, resturant);
      if (data.success) {
        console.log(data);
        setFlag(false);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const handleDelete = async (id, Id) => {
    try {
      await axios.delete(`/admin/transportBooking/${Id}`, { data: { id: id } });
      //setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleUpdate = async (e, b) => {
    console.log(e);
    setFlag(true);
    setId(b);
    setResturant(e);
  };
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
  }, []);

  return (
    <AdminDashobard>
      {flag == false ? (
        <div className="col-10 p-3 bg-light" style={{ height: "100vh" }}>
          <h3 style={{ fontWeight: "600" }}>Transport</h3>
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
                            <th>delete</th>
                            <th>update</th>
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
                                    <td>
                                      <button
                                        className="btn btn-danger btn-sm btn-hover-bg-shade-amount:20%"
                                        onClick={() =>
                                          handleDelete(i._id, item._id)
                                        }
                                      >
                                        Delete
                                      </button>
                                    </td>
                                    <td>
                                      <button
                                        className="btn btn-success btn-sm btn-hover-bg-shade-amount:20%"
                                        onClick={() =>
                                          handleUpdate(i, item._id)
                                        }
                                      >
                                        update
                                      </button>
                                    </td>
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
      ) : (
        <div className="from-container">
          <form onSubmit={handleClick}>
            <div class="form-group col-8 ">
              <input
                placeholder="Name"
                required
                id="name"
                className=" w-100"
                value={resturant.name}
                onChange={handleChange}
              />
            </div>
            <div class="form-group col-8 ">
              <input
                placeholder="Email"
                required
                id="email"
                value={resturant.email}
                className=" w-100"
                onChange={handleChange}
              />
            </div>
            <div class="form-group col-8 ">
              <input
                placeholder="CNIC"
                type="number"
                maxLength="13"
                required
                id="cnic"
                value={resturant.cnic}
                onChange={handleChange}
                className=" w-100"
              />
            </div>
            <div class="form-group col-8 ">
              <input
                placeholder="Contact Number"
                type="number"
                maxLength="13"
                required
                id="contactNumber"
                value={resturant.contactNumber}
                onChange={handleChange}
                className=" w-100"
              />
            </div>
            <div class="form-group col-8 ">
              <label className="form-label">Select Route:</label>
              <select
                className="btn btn-secondary dropdown-toggle"
                style={{ width: "100%", marginBottom: "20px", height: "30px" }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onChange={handleChange}
                id="route"
                required
              >
                {" "}
                <option value={resturant.route}>{resturant.route}</option>
                <option value={"Naran-Babusar Top(Round Trips Only)"}>
                  Naran-Babusar Top(Round Trips Only)
                </option>
                <option value={"Naran-Batakundi(Round Trips Only)"}>
                  Naran-Batakundi(Round Trips Only)
                </option>
                <option value={"Naran-Shogran & Siri Paye(Round Trips Only)"}>
                  Naran-Shogran & Siri Paye(Round Trips Only)
                </option>
                <option value={"Naran-Lake Saif-ul-Malook(Round Trips Only)"}>
                  Naran-Lake Saif-ul-Malook(Round Trips Only)
                </option>
              </select>
            </div>
            <div class="form-group col-8 ">
              <label className="form-label">Select Bus Type:</label>
              <select
                className="btn btn-secondary dropdown-toggle"
                style={{ width: "100%", marginBottom: "20px", height: "30px" }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onChange={handleChange}
                id="busType"
                required
              >
                {" "}
                <option value={resturant.busType}>{resturant.busType}</option>
                <option value={"jeep"}>Jeep</option>
                <option value={"Vigo 4 by 4"}>Vigo 4 by 4</option>
                <option value={"Toyota Hiace(16 Seater)"}>
                  Toyota Hiace(16 Seater)
                </option>
                <option value={"Coaster(30 Seater)"}>Coaster(30 Seater)</option>
              </select>
            </div>
            <div class="form-group col-8 ">
              <label>Select Arival Date & Time:</label>
              <input
                type="datetime-local"
                required
                id="arrivalDate"
                onChange={handleChange}
                value={new Date(resturant.arrivalDate)
                  .toISOString()
                  .substr(0, 16)}
                className=" w-100"
              ></input>
            </div>
            <div class="form-group col-8 ">
              <button type="submit" className="w-100 btn btn-primary">
                Book{" "}
              </button>
            </div>
          </form>
        </div>
      )}
    </AdminDashobard>
  );
}

export default Transport;
