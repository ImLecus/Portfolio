import "./tech.css";
function Tech(props:any){
    return(
    <div className="tech">
        <img src={props.src}></img>
        <h3>{props.name}</h3>
        <p>Manejo sistemas de control de versiones tales como Git y GitHub.</p>
    </div>)
}
export default Tech;