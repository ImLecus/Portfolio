export default function Card({site,src}:any){
    return(
        <div className="card">
            <button onClick={ () => {window.location.href = "https://" + site}}>
                <img alt="cardImage" src={"/img/"+ src +".jpg"}></img>
            </button>
        </div>
    );
}