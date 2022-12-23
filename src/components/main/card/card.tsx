import "./card.css"
import language from "../../../data/languages.json"

function Card(props:any){
    return(
        <div className="card">
            <div  className="justify-center">
                <img alt="cardImage" src={"/img/"+ props.src +".jpg"}></img>
            </div>
            <div>
                <h2 className="text-zinc-300">Hyassets Web</h2>
                <p className="text-zinc-300">Se trata de una colección de modelos 3D hechos por Powerbyte7. Hice esta página a modo de regalo ya que anteriormente se descargaban directamente desde GitHub sin tener un sitio web de referencia.</p>
                <div>
                    <button className="secondary" onClick={() => {window.location.href = "https://"+props.site}}>Visitar sitio</button>
                    <button className="secondary" onClick={() => {window.location.href = "https://github.com/ImLecus/"+props.repo}}>Ver repositiorio</button>
                </div>
            </div>
        </div>
    );
}
export default Card;