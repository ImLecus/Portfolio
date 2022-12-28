import "./card.css"
import language from "../../../data/languages.json"

function Card(props:any){
    return(
        <div className="card">
            <button onClick={ () => {window.location.href = "https://" + props.site}}>
                <img alt="cardImage" src={"/img/"+ props.src +".jpg"}></img>
            </button>
        </div>
    );
}
export default Card;