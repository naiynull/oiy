import * as S from "./styles"

import fundo from "../../assets/fundo01.jpg"
import jogo01 from "../../assets/filme01.mp4"
import jogo02 from "../../assets/filme02.mp4"
import jogo03 from "../../assets/filme03.mp4"
import { ComponentHeader } from "../../components"

export function Home() {
    return (

        <section style={{
            height: '100vh',
            backgroundImage: `url(${fundo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
        }}>
            <ComponentHeader />


            <S.Video>
                <video id="videoBanner" className="videoBanner" loop autoPlay muted >
                    <source src={jogo01} type='video/mp4'></source>
                </video> 
                 <video id="videoBanner" className="videoBanner" loop autoPlay muted >
                    <source src={jogo02} type='video/mp4'></source>

                </video>
                <video id="videoBanner" className="videoBanner" loop autoPlay muted >
                    <source src={jogo03} type='video/mp4'></source>

                </video> 
            </S.Video> 
            <S.Texs>
                <li>
                    <a href="/cadastro" id="li-cads">Cadastre-se</a>
                </li>
            </S.Texs>
        </section>

    )
}