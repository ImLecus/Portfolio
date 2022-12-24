import "./tech.css";
function Tech(props:any){
    return(
    <div className="tech shadow-xl" data-aos="flip-left">
        <img src={props.src}></img>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
    </div>)
}
export default Tech;