import "./slide.css"
function Slide(props:any){
    let dir = `./img/${props.name.toString().toLowerCase()}.png`
    return(
        <div className="slide text-container">
            <div className="name"><div className="square"></div>
                <span>{props.name}</span>
                </div>
            <img src={dir} />
        </div>
    );
}
export default Slide;