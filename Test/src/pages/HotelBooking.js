import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashobard from "../components/AdminDashobard";
function HotelBooking() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [Id, setId] = useState();
  const [resturant, setResturant] = useState({
    name: undefined,
    email: undefined,
    cnic: undefined,
    contactNumber: undefined,
    ResturantName: undefined,
    room: undefined,
    numberOfPersons: undefined,
    stay: undefined,
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
      const data = axios.put(`/admin/hotelBooking/${Id}`, resturant);
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
      await axios.delete(`/admin/hotelBooking/${Id}`, { data: { id: id } });
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
        console.log(data);
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
          <h3 style={{ fontWeight: "600" }}>Hotel</h3>
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
                            <th>Phone</th>
                            <th>Hotel Name</th>
                            <th>Rooms</th>
                            <th>Date</th>
                            <th>Delete Booking</th>
                            <th>Update Booking</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.map((item, index) => {
                            {
                              return item.hotelBooking.map((i) => {
                                return (
                                  <tr className="border-bottom mb-6">
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.cnic} </td>
                                    <td>{i.contactNumber}</td>
                                    <td>{i.hotelName}</td>
                                    <td>{i.room}</td>
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
                value={resturant.name}
                onChange={handleChange}
                className=" w-100"
              />
            </div>
            <div class="form-group col-8 ">
              <input
                placeholder="Email"
                required
                id="email"
                value={resturant.email}
                onChange={handleChange}
                className=" w-100"
              />
            </div>
            <div class="form-group col-8 ">
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
            <div class="form-group col-8 ">
              <input
                placeholder="Contact Number"
                type="number"
                maxLength="13"
                required
                id="contactNumber"
                onChange={handleChange}
                className=" w-100"
                value={resturant.contactNumber}
              />
            </div>

            <div class="form-group col-8 ">
              <label className="form-label">Select Hotel:</label>
              <select
                className="btn btn-secondary dropdown-toggle"
                style={{ width: "100%", marginBottom: "20px", height: "30px" }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="hotelName"
                required
                onChange={handleChange}
              >
                <option value={resturant.hotelName}>
                  {resturant.hotelName}
                </option>
                <option value="Pine View Hotel-Naran">
                  Pine View Hotel-Naran
                </option>
                <option value={"Hotel One-Naran"}>Hotel One-Naran</option>
                <option value={"Troutland Hotel-Naran"}>
                  Troutland Hotel-Naran
                </option>
                <option value={"Hill View Hotel-Shogran"}>
                  Hill View Hotel-Shogran
                </option>
              </select>
            </div>
            <div class="form-group col-8 ">
              <label className="form-label">Select Room Type:</label>
              <select
                className="btn btn-secondary dropdown-toggle"
                style={{ width: "100%", marginBottom: "20px", height: "30px" }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="room"
                required
                onChange={handleChange}
              >
                {" "}
                <option value={resturant.room}>{resturant.room}</option>
                <option value={"Economy"}>Economy</option>
                <option value={"Luxury"}>Luxury</option>
                <option value={"Super Luxury"}>Super Luxury</option>
                <option value={"VIP"}>VIP</option>
                <option value={"WIP"}>VVIP</option>
              </select>
            </div>
            <div class="form-group col-8 ">
              <label className="form-label">Select No. of Persons:</label>
              <select
                className="btn btn-secondary dropdown-toggle"
                style={{ width: "100%", marginBottom: "20px", height: "30px" }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                required
                id="numberOfPersons"
                onChange={handleChange}
              >
                <option value={resturant.numberOfPersons}>
                  {resturant.numberOfPersons}
                </option>
                <option value={"1-2"}>1-2</option>
                <option value={"3-5"}>3-5</option>
                <option value={"5-8"}>5-8</option>
                <option value={"9-10"}>9-10</option>
              </select>
            </div>
            <div class="form-group col-8 ">
              <label>Select Arrival Date:</label>
              <input
                type="date"
                required
                id="arrivalDate"
                onChange={handleChange}
                value={new Date(resturant.arrivalDate)
                  .toISOString()
                  .slice(0, 10)}
                className=" w-100"
              ></input>
            </div>
            <div class="form-group col-8 ">
              <input
                placeholder="Number of days to Stay"
                type="number"
                min="1"
                max="30"
                id="stay"
                required
                onChange={handleChange}
                className=" w-100"
                value={resturant.stay}
              ></input>
            </div>

            <div class="form-group col-8 ">
              <button type="submit" className="w-100 btn btn-primary">
                Update details
              </button>
            </div>
          </form>
        </div>
      )}
    </AdminDashobard>
  );
}

export default HotelBooking;
