import * as S from "./styles"

export function Hamburguer() {
    return (
        <S.Hamburguer>
            <input type="checkbox" className="hamburguer" />

            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/personagens">Personagens</a>
                </li>
                <li>
                    <a href="/sinopse">Sinopse</a>
                </li>
            </ul>
        </S.Hamburguer>
    )
}