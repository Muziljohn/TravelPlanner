import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import  images from "../assets/12.jpg";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
       heroimg={images}
       title="Your journey Your Story"
       text="Choose your Favourite Destination."
       buttonText="Travel Plan "
       url="/service"
       btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )

}
export default Home;