import "./ServiceStyles.css";

export default function ServiceData(props) {
  return (
    <div className="s-card"> 
        <div className="s-image">
            <img src={props.image} alt="img"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <a href={props.url}>{props.urlText}</a>

    </div>
  )
}
