import "./footer.css"
export default function Footer(){
    return(
        <footer className="border-zinc-700">
            <div>
                <a href="https://instagram.com/imlecus"><img src="./img/instagram.svg" alt="" /></a>
                <a href="https://github.com/ImLecus"><img src="./img/github-white.svg" alt="" /></a>
                <a href="https://www.linkedin.com/in/marcosgf"><img src="./img/linkedin.svg" alt="" /></a>
            </div>
            <p>&copy; Marcos González 2023-2024 All rights reserved. <br /><br />Frontend + React Native Developer</p>
        </footer>
    )
}