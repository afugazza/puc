import { Link } from "react-router-dom"
import { MainMenuContainer } from "../styles/MainMenuContainer"

export const MainMenu = () => (
<MainMenuContainer>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre-nós-aqui</Link></li>        
    </ul>

</MainMenuContainer>
);