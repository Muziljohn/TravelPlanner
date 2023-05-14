import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import   ServiceImg from "../assets/night.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
import Services from "../Components/Services";

function Service (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroimg={ServiceImg}
        title="Service"
        btnClass="hide"
        />
        <Services/>
        <Trip/>
         <Footer/>
        </>
    )

}
export default Service;