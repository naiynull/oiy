import * as S from "./styles"
import logo from "../../assets/geral/logo.png"



export function Header() {
    return (

        <S.Header>

            <picture>
                <img src={logo} alt="Logo" />
            </picture>

            <S.NavBar>
                <ul className="header">
                    <li>
                        <a href="/home ">Home</a>
                    </li>
                    <li>
                        <a href="/personagens">Personagens</a>
                    </li>
                    <li>
                        <a href="/Sinopse">Sinopse</a>
                    </li>
                </ul>
            </S.NavBar>

        </S.Header>

    )
}