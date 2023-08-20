import * as S from "./styles"

import fundo from "../../assets/fundo02.png"
import { ComponentHeader } from "../../components"
import link from "../../assets/link.png"
export function Home() {
    return (

        <section style={{
            height: '100vh',
            backgroundImage: `url(${fundo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
        }}>
            <ComponentHeader />
            {/* <S.Video>
               <section className="grid">
               <iframe width="360" height="205" src="https://www.youtube.com/embed/uHGShqcAHlQ?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
               <iframe width="360" height="205" src="https://www.youtube.com/embed/2SNF4M_v7wc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               <iframe width="360" height="205" src="https://www.youtube.com/embed/LjN1bs_6b68?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </section> 
            </S.Video>  */}
            <S.testo>
            <div className="texto">
                <h1>The Legend of Zelda</h1>
                <p>The Legend of Zelda é uma série de jogos eletrônicos<br/>da Nintendo criada em  1986 por Shigeru Miyamoto e<br/> Takashi Tezuka. É centrado em jogos eletrônicos<br/> de ação e aventura e alguns elementos de RPG.</p>
            </div>
            </S.testo>
          
          
            <S.Texs>
                <li>
                    <a href="/cadastro" id="li-cads">Cadastre-se</a>
                </li>
            </S.Texs> 
        </section>

    )
}