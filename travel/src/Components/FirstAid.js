import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FirstAidImage from "../assets/firstAid.jpg";
import Hero from "./Hero";

export default function FirstAid() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={FirstAidImage}
        title=""
        btnclassName="hide"
      />

      <div style={{"alignItems":"center", "margin":"5rem", "marginLeft":"14rem"}}>

      <div className="card text-center" style={{width:"85%", marginBottom:"5rem", border:"2px solid black"}}>
        <div className="card-header">Hospital</div>
        <div className="card-body">
          <h3 className="card-title">Govt. Hospital (BHU) Naran</h3>
          <p className="card-text">
            Address: WM53+6Q3, Naran, Mansehra, Khyber Pakhtunkhwa.
          </p>
          
          
        </div>
        <div className="card-footer text-muted"></div>
      </div>


      <div className="card text-center" style={{width:"85%", marginBottom:"5rem", border:"2px solid black"}}>
        <div className="card-header">Hospital</div>
        <div className="card-body">
          <h3 className="card-title">Govt. Hospital (BHU) Naran</h3>
          <p className="card-text">
            Address: WM53+6Q3, Naran, Mansehra, Khyber Pakhtunkhwa.
          </p>
          
        </div>
        <div className="card-footer text-muted"></div>
      </div>

      <div className="card text-center" style={{width:"85%", marginBottom:"5rem", border:"2px solid black"}}>
        <div className="card-header">Hospital</div>
        <div className="card-body">
          <h3 className="card-title">Govt. Hospital (BHU) Naran</h3>
          <p className="card-text">
            Address: WM53+6Q3, Naran, Mansehra, Khyber Pakhtunkhwa.
          </p>
          
        </div>
        <div className="card-footer text-muted"></div>
      </div>

      </div>


      <Footer />
    </>
  );
}
