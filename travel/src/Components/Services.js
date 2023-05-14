import "./ServiceStyles.css";
import TripData from "./ServiceData";
import Service1 from "../assets/resturant.jpg";
import Service2 from "../assets/hotel.jpg";
import Service3 from "../assets/transport.jpg";
import Service4 from "../assets/first-aid.jpg";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="service">
      <h1>Our Services</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="tripcard">
        <Link to="/resturant" style={{textDecoration:'none', color:'black'}}>
          <TripData
            image={Service1}
            heading="Resuturants"
            text="Lorem ipsum dolor sit amet consectet adipisicing elit. Doloremque perferendis aspernatur quasi consectetur, ex nesciunt tempore distinctio dolorum numquam adipisci illo maxime sint, laboriosam velit voluptates deleniti harum, quis facilis."
          />
        </Link>
        <Link to="/hotel" style={{textDecoration:'none', color:'black'}}>
        <TripData
          image={Service2}
          heading="Hotels"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis aspernatur quasi consectetur, ex nesciunt tempore distinctio dolorum numquam adipisci illo maxime sint, laboriosam velit voluptates deleniti harum, quis facilis."
        />
        </Link>
        <Link to="/travel" style={{textDecoration:'none', color:'black'}}>
        <TripData
          image={Service3}
          heading="Transport"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis aspernatur quasi consectetur, ex nesciunt tempore distinctio dolorum numquam adipisci illo maxime sint, laboriosam velit voluptates deleniti harum, quis facilis."
        />
        </Link>

        <Link to='/firstaidpoint' style={{textDecoration:'none', color:'black'}}>
        <TripData
          image={Service4}
          heading="First Aid"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis aspernatur quasi consectetur, ex nesciunt tempore distinctio dolorum numquam adipisci illo maxime sint, laboriosam velit voluptates deleniti harum, quis facilis."
        />
        </Link>
      </div>
    </div>
  );
}
