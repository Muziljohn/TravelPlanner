import Mountain1 from "../assets/20.jpg";
import Mountain2 from "../assets/21.jpg";
import Mountain3 from "../assets/22.jpg";
import Mountain4 from "../assets/23.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame. </p>

      <DestinationData
        className="first-des"
        heading="Lake Saif-ul-Malook, Naran"
        text="Saiful Muluk (جھیل سیف الملوک) is a mountainous lake located at the northern end of the Kaghan Valley, near the town of Naran 
            in the Saiful Muluk National Park. At an elevation of 3,224 m (10,578 feet) 
            above sea level, the lake is located above the tree line, and is one of the highest lakes in Pakistan. 
            Saiful Muluk was formed by glacial moraines that blocked the water of the stream passing through the valley. 
            The Kaghan Valley was formed in the greater 
            Pleistocene Period dating back almost 300,000 years when the area was covered with ice. Rising temperatures and 
            receding glaciers left a large depression where glaciers once stood. Melting water collected into the lake."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Lalazar, Batakundi"
        text="Lalazar (لاله‌زار) is a tourist spot at an elevation of 3,123 metres (10,246 ft) above the sea level, 
            located in upper Kaghan Valley in Mansehra District of Khyber Pakhtunkhwa Province of Pakistan 
            The road to the town tests the skill, and courage, of any driver. 
Set high in the upper Kaghan Valley, the deadly road to the town is called Lalazar Road. 
It can be found to the south-west of Batakundi. 
The track is 4.2 km (2.6 miles) long with incredible landscapes, pine forest scenic views and charming weather. 
It’s a typical Pakistani mountain road, with hills on one side 
and the Kunhar River on the other side. Lalazar is located near the famous Babusar Pass."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
