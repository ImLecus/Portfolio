import "./tech.css";
export default function Tech({src,name,description}:any){
    return(
    <div className="tech shadow-xl" data-aos="flip-left">
        <img src={src}></img>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>)
}