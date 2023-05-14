import React from "react";
import AdminDashobard from "../components/AdminDashobard";
import chart from "../assets/chart.svg";

function AdminHome() {
  return (
    <AdminDashobard>
      <div className="col-10 p-3 bg-light " >
        {/* <img src={chart} style={{width:'120vh', height:'100vh'}}/> */}
        <h1>Home Page</h1>
        <div className="card" style={{marginBottom:'2rem', border:'2px solid black'}}>
          <h5 className="card-header">Motorway North Zone</h5>
          <div className="card-body">
            <h5 className="card-title">Sector M1</h5>
            <p className="card-text">Road Closed: from Chasadda (KM 474) to (KM 474.500) due to Road Work (Road Side : North Bound 1st Lane 2nd Lane )</p>
          </div>
        </div>
        
        <div className="card" style={{marginBottom:'2rem', border:'2px solid black'}}>
          <h5 className="card-header">Motorway South Zone</h5>
          <div className="card-body">
            <h5 className="card-title">Sector M1</h5>
            <p className="card-text">Road Closed: from Chasadda (KM 474) to (KM 474.500) due to Road Work (Road Side : North Bound 1st Lane 2nd Lane )</p>
          </div>
        </div>
        
        <div className="card" style={{marginBottom:'2rem', border:'2px solid black'}}>
          <h5 className="card-header">Motorway Central Zone</h5>
          <div className="card-body">
            <h5 className="card-title">Sector M1</h5>
            <p className="card-text">Road Closed: from Chasadda (KM 474) to (KM 474.500) due to Road Work (Road Side : North Bound 1st Lane 2nd Lane )</p>
          </div>
        </div>
      </div>
    </AdminDashobard>
  );
}

export default AdminHome;
