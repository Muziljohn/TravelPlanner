import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashobard from "../components/AdminDashobard";

function Resturants() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [Id, setId] = useState();
  const [resturant, setResturant] = useState({
    name: undefined,
    email: undefined,
    cnic: undefined,
    contactNumber: undefined,
    ResturantName: undefined,
    tables: undefined,
    numberOfPersons: undefined,
    arrivalDate: undefined,
    cusomerNote: undefined,
  });
  const handleChange = (e) => {
    setResturant((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleDelete = async (id, Id) => {
    try {
      await axios.delete(`/admin/resturantBooking/${Id}`, { data: { id: id } });
      //setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleUpdate = async (e, b) => {
    setFlag(true);
    console.log(e);
    setResturant(e);
    setId(b);
  };

  const handleSubmit = async () => {
    try {
      console.log(Id);
      console.log(resturant);
      const data = axios.put(`/admin/resturantBooking/${Id}`, resturant);
      if (data.success) {
        console.log(data);
        setFlag(false);
      }
    } catch (err) {
      alert(err.message);
    }
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
          <h3 style={{ fontWeight: "600" }}>Resturants</h3>
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
                        Booking List
                      </h4>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Cnic</th>

                            <th>Resturant Name</th>
                            <th>Tables</th>
                            <th>Date</th>
                            <th>Delete Booking</th>
                            <th>update Booking</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.map((item, index) => {
                            {
                              return item.resturantBooking.map((i) => {
                                return (
                                  <tr className="border-bottom mb-6">
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.cnic} </td>
                                    <td>{i.resturantName}</td>
                                    <td>{i.tables}</td>
                                    <td>{i.arrivalTime}</td>
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
        <form
          style={{ marginLeft: "auto", marginRight: "auto" }}
          onSubmit={handleSubmit}
        >
          <div class="form-group col-8 ">
            <input
              placeholder="Name"
              required
              id="name"
              onChange={handleChange}
              className=" w-100"
              value={resturant.name}
            />
          </div>
          <div class="form-group col-8">
            <input
              placeholder="Email"
              required
              id="email"
              onChange={handleChange}
              className=" w-100"
              value={resturant.email}
            />
          </div>
          <div class="form-group col-8">
            <input
              placeholder="CNIC"
              type="number"
              maxLength="13"
              required
              id="cnic"
              onChange={handleChange}
              className=" w-100"
              value={resturant.cnic}
            />
          </div>
          <div class="form-group col-8">
            <input
              placeholder="Contact Number"
              type="number"
              maxLength="13"
              required
              id="conactNumber"
              className=" w-100"
              onChange={handleChange}
              value={resturant.contactNumber}
            />
          </div>
          <div class="form-group col-8">
            <label className="form-label">Select Resturant:</label>
            <select
              className="btn btn-secondary dropdown-toggle w-100 "
              style={{ width: "100%", marginBottom: "20px", height: "30px" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="resturantName"
              onChange={handleChange}
              required
            >
              <option value={resturant.resturantName}>
                {resturant.resturantName}
              </option>
              <option value={"Food Planet-Naran"}>Food Planet-Naran</option>
              <option value={"Mr. Broaster-Naran"}>Mr. Broaster-Naran</option>
              <option value={"Lasani Resturant-Naran"}>
                Lasani Resturant-Naran
              </option>
              <option value={"Mc'Donalds-Shogran"}>Mc'Donalds-Shogran</option>
            </select>
          </div>
          <div class="form-group col-8">
            <label className="form-label">No. of Tables</label>
            <select
              className="btn btn-secondary dropdown-toggle w-100"
              style={{ width: "100%", marginBottom: "20px", height: "30px" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="tables"
              onChange={handleChange}
            >
              {" "}
              <option value={resturant.tables}>{resturant.tables}</option>
              <option value={"1-Small"}>1-Small</option>
              <option value={"1-Large"}>1-Large</option>
              <option value={"2-Large"}>2-Large</option>
              <option value={"Floor"}>Floor</option>
              <option value={"Hall"}>Hall</option>
            </select>
          </div>
          <div class="form-group col-8">
            <label className="form-label">Select No. of Persons:</label>
            <select
              className="btn btn-secondary dropdown-toggle w-100"
              style={{ width: "100%", marginBottom: "20px", height: "30px" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              required
              id="numberOfPersons"
              onChange={handleChange}
            >
              {" "}
              <option value={resturant.numberOfPersons}>
                {resturant.numberOfPersons}
              </option>
              <option value={"1-2"}>1-2</option>
              <option value={"3-5"}>3-5</option>
              <option value={"5-8"}>5-8</option>
              <option value={"9-10"}>9-10</option>
            </select>
          </div>
          <div class="form-group col-8">
            <label>Select Arrival Date & Time:</label>
            <input
              type="datetime-local"
              required
              id="arrivalTime"
              className="w-100"
              onChange={handleChange}
              value={new Date(resturant.arrivalTime)
                .toISOString()
                .substr(0, 16)}
            ></input>
          </div>
          <div class="form-group col-8">
            <textarea
              placeholder="Customer Note"
              rows="3"
              id="cusomerNote"
              className="w-100"
              onChange={handleChange}
              value={resturant.customerNote}
            ></textarea>
          </div>
          <div class="form-group col-8">
            <button type="submit" className="w-100 btn btn-primary">
              update
            </button>
          </div>
        </form>
      )}
    </AdminDashobard>
  );
}

export default Resturants;
