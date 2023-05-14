import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import Login from "./routes/Login";
import Signup from "./Components/Signup";
import HotelForm from "./Components/HotelForm";
import ResturantForm from "./Components/ResturantForm";
import TravelForm from "./Components/TravelForm";
import FirstAid from "./Components/FirstAid";
import TripForm from "./Components/TripForm";
export default function App() {
    return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/resturant" element={<ResturantForm/>}/>
            <Route path="/hotel" element={<HotelForm/>}/>
            <Route path="/travel" element={<TravelForm/>}/>
            <Route path="/firstaidpoint" element={<FirstAid/>}/>
            <Route path="/plantrip" element={<TripForm/>}/>

          </Routes>
         
          
        </div>
    );
}
