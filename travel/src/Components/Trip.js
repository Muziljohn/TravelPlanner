import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/naran.jpg"
import Trip2 from "../assets/babusar.jpg"
import Trip3 from "../assets/siri.jpg"
import { Link } from "react-router-dom";
function Trip(){
    return(
        <div className="trip">
            <h1>Plan Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
            <Link to='/plantrip' style={{textDecoration:'none', color:'black'}}>
                <TripData
                image={Trip1}
                heading = "Trip to Naran/Kaghan"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis aspernatur quasi consectetur, ex nesciunt tempore distinctio dolorum numquam adipisci illo maxime sint, laboriosam velit voluptates deleniti harum, quis facilis."
                />
                </Link>
            <Link to='/plantrip' style={{textDecoration:'none', color:'black'}}>
                    <TripData
                image={Trip2}
                heading = "Trip to BabusarTop"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis aspernatur quasi consectetur, ex nesciunt tempore distinctio dolorum numquam adipisci illo maxime sint, laboriosam velit voluptates deleniti harum, quis facilis."
                />
                </Link>
            <Link to='/plantrip' style={{textDecoration:'none', color:'black'}}>
                <TripData
                image={Trip3}
                heading = "Trip to Shogran/Siri Paye"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis aspernatur quasi consectetur, ex nesciunt tempore distinctio dolorum numquam adipisci illo maxime sint, laboriosam velit voluptates deleniti harum, quis facilis."
                />
                </Link>
            </div>

        </div>
    )
}
export default Trip;
