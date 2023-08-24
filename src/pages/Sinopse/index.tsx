import * as S from "./styles"
import teste from "../../assets/fundo01.jpg"
import fundo from "../../assets/geral/fundo.gif"
{/*imagens do zelda 01*/ }
import zelda11 from "../../assets/zeldajogo01/d1.webp"
import zelda14 from "../../assets/zeldajogo01/a1.jpg"
import zelda13 from "../../assets/zeldajogo01/b1.avif"
import zelda12 from "../../assets/zeldajogo01/d1.webp"
import zeldam from "../../assets/zeldajogo01/fundo01.jpg"
{/*imagens do zelda 02*/ }
import zelda21 from "../../assets/zeldajogo02/a2.avif"
import zelda22 from "../../assets/zeldajogo02/b2.jpg"
import zelda23 from "../../assets/zeldajogo02/c2.jpg"
import zelda24 from "../../assets/zeldajogo02/d2.webp"
import zeldam2 from "../../assets/zeldajogo02/fundo02.jpg"
{/*imagens do zelda 03*/ }
import zelda31 from "../../assets/zeldajogo03/a3.jpg"
import zelda32 from "../../assets/zeldajogo03/b3.jpg"
import zelda33 from "../../assets/zeldajogo03/c3.webp"
import zelda34 from "../../assets/zeldajogo03/d3.jpg"
import zeldam3 from "../../assets/zeldajogo03/fundo03.webp"
{/*imagens do zelda 04*/ }
import zelda41 from "../../assets/zeldajogo04/a4.png"
import zelda42 from "../../assets/zeldajogo04/b4.webp"
import zelda43 from "../../assets/zeldajogo04/c4.jpeg"
import zelda44 from "../../assets/zeldajogo04/d4.jpg"
import zeldam4 from "../../assets/zeldajogo04/fundo04.jpg"
{/*imagens do zelda 05*/ }
import zelda51 from "../../assets/zeldajogo05/a5.png"
import zelda52 from "../../assets/zeldajogo05/b5.jpg"
import zelda53 from "../../assets/zeldajogo05/c5.jpeg"
import zelda54 from "../../assets/zeldajogo05/d5.webp"
import zeldam5 from "../../assets/zeldajogo05/fundo05.jpg"
import { ComponentHeader } from "../../components"

export function Sinopse() {
    return (

        <section style={{
            height: '100vh',
            backgroundImage: `url(${fundo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
        }}>
            <ComponentHeader />

            <S.textot>

                {/*primeiro jogo do zelda*/}

                <div className="main">

                    <h1>The Legend of Zelda a Link to the Past</h1>


                    <h2>Nitendo</h2>
                    <p>Super Nintendo</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={zelda11} alt="Mountains" width='100%' />
                                <h3>Criação</h3>
                                <p>The Legend of Zelda: A Link to the Past,é o terceiro jogo da série The Legend of Zelda, e foi lançado em 1991 no Japão e em 1992 na América do Norte e Europa.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda12} alt="Lights" width='100%' />
                                <h3>História</h3>
                                <p>A trama de A Link to the Past concentra-se no herói Link em uma jornada para salvar a terra de Hyrule, impedir a volta de Ganon e libertar as sete donzelas descendentes dos antigos sábios. </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda13} alt="Nature" width='100%' />
                                <h3>Jogabilidade</h3>
                                <p>Link é capaz de realizar diversas ações, como pular de penhascos para nadar, empurrar e levantar objetos, e usar uma variedade de ferramentas, armas, armaduras e escudos.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda14} alt="Mountains" width='100%' />
                                <h3>Curiosidade</h3>
                                <p>Em A Link to the Past, ocorre uma das primeiras demonstrações via videogame de que maltratar animais não é legal. Se Link insistir em agredir os Cuccos (aquelas galinhas simpáticas), aparecerá um bando feroz delas do céu, capaz de nocauteá-lo se não cair fora rapidinho.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={zeldam} alt="Bear" width='100%' />
                        <h3>ctrl de aventuras</h3>
                        <p>Numa noite escura e de tempestade, o jovem Link embarca numa aventura inesquecível, tanto para ele como para ti! A Princess Zelda foi capturada e um mago maléfico tenta libertar Ganon, o rei das trevas. Apenas Link tem a coragem para salvar Hyrule!.</p>

                    </div>

                </div>
            </S.textot>

            {/*segundo jogo do zelda*/}
            <S.tata>
                <div className="main">

                    <h1>The Legend of Zelda: Link's Awakening</h1>


                    <h2>1993</h2>
                    <p>Game Boy</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={zelda21} alt="Mountains" width='100%' />
                                <h3>Criação</h3>
                                <p> É o quarto título da série The Legend of Zelda e o primeiro produzido para um console portátil, tendo sido lançado exclusivamente para Game Boy em junho de 1993 no Japão, agosto na América do Norte e novembro na Europa. A história segue o protagonista Link enquanto explora a misteriosa Ilha Koholint. </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda22} alt="Lights" width='100%' />
                                <h3>Hitória</h3>
                                <p> A atual encarnação de Link sofre um naufrágio durante uma tempestade e fica preso na Ilha Koholint, um local guardado por uma divindade semelhante a uma baleia chamada Peixe do Vento. Ele então parte em uma jornada com o objetivo de recuperar oito instrumentos musicais mágicos que juntos irão acordar o dormente Peixe do Vento e lhe permitir escapar da ilha.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda23} alt="Nature" width='100%' />
                                <h3>Jogabilidade</h3>
                                <p>O jogador pode expandir suas habilidades com diversos itens, que são descobertos em calabouços e por meio de interações com personagens não jogáveis. Certos itens dão acesso a áreas anteriormente bloqueadas e são necessários para se entrar e finalizar calabouços. É também possível roubar itens de vendedores, porém isso faz o jogador ser caracterizado como "ladrão".</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda24} alt="Mountains" width='100%' />
                                <h3>Curiosidade</h3>
                                <p>Na edição de 2019, a Nintendo não inventou nem adicionou nada ao conteúdo da história principal. Trata-se de uma recriação fiel do jogo original, o que agrada aos puristas, mas pode incomodar quem esperava mais por um jogo que custa o valor de um lançamento de primeira linha da empresa.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={zeldam2} alt="Bear" width='100%' />
                        <h3>Ctrl de aventuras</h3>
                        <p>Link acorda em uma estranha terra longe de Hyrule, onde animais falam e monstros vagueiam.</p>
                    </div>

                </div>
            </S.tata>
            {/*terceiro jogo do zelda*/}
            <S.tata>
                <div className="main">

                    <h1>The Legend of Zelda: Oracle of Seasons and Oracle of Ages</h1>


                    <h2>2001</h2>
                    <p>Game Boy Color</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={zelda31} alt="Mountains" width='100%' />
                                <h3>Criação</h3>
                                <p>são dois jogos eletrônicos de ação e aventura da série The Legend of Zelda desenvolvidos pela Flagship e publicados pela Nintendo originalmente para Game Boy Color em 27 de fevereiro de 2001 no Japão,em 14 de maio de 2001 na América do Norte, em 19 de junho de 2001 no Brasile em 5 de outubro de 2001 na Europa. O jogo foi relançado através do Virtual Console para Nintendo 3DS em 27 de fevereiro de 2013 no Japão e em 30 de maio de 2013 na América do Norte e Europa.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda32} alt="Lights" width='100%' />
                                <h3>História</h3>
                                <p>Ages começa quando a Triforce chama por Link no Castelo de Hyrule. Link se aproxima e é transportado para uma floresta na terra de Labrynna, onde ouve gritos. Em uma clareira, Link encontra Impa cercada de monstros, que fogem ao vê-lo. Impa então pede que Link a ajude a encontrar uma cantora na floresta. Os dois encontram Nayru, uma jovem de cabelos azuis cantando em um toco de árvore e rodeada por criaturas da floresta. Uma sombra emerge de Impa e se revela como sendo Veran, a Feiticeira das Sombras</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda33} alt="Nature" width='100%' />
                                <h3>Jogabilidade</h3>
                                <p>Em ambos, o jogador controla o protagonista Link com uma perspectiva aérea. A jogabilidade é similar à de The Legend of Zelda: Link's Awakening, copiando seus gráficos, sons e controles básicos.O enredo completo é revelado após completar os dois jogos.Como em outros títulos da série, aqui Link conta também com um guia. Ele é guiado pela Árvore Maku, um personagem importante em ambos os jogos, que o direcionará para a próxima dungeon, entre outras coisas. </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda34} alt="Mountains" width='100%' />
                                <h3>Curiosidade</h3>
                                <p>Exatamente porque o brilhantismo do jogo não deve ser retratado apenas à sua época e, infelizmente, como dito acima, ele é um tanto quanto esquecido na listagem “dos melhores Zeldas”, não marcando presença na lembrança afetiva quando comparados com outros jogos da franquia.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={zeldam3} alt="Bear" width='100%' />
                        <h3>Ctrl de aventuras</h3>
                        <p> A árvore Maku de Labrinna não é muito alta (provavelmente é até mais jovem que a de Holodrum), dando até pra chegar no topo dela, depois de subir um pouco pelas trepadeiras no tronco</p>
                    </div>

                </div>
            </S.tata>
            {/*quarto jogo do zelda*/}
            <S.tata>
                <div className="main">

                    <h1>The Legend of Zelda: A Link Between Worlds</h1>


                    <h2>2013</h2>
                    <p>Nintendo 3DS</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={zelda41} alt="Mountains" width='100%' />
                                <h3>Criação</h3>
                                <p> É o décimo sétimo título da série The Legend of Zelda e uma sequência direta de The Legend of Zelda: A Link to the Past de 1991, tendo sido lançado exclusivamente para o Nintendo 3DS em novembro de 2013 na Europa e América do Norte e no mês seguinte no Japão.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda42} alt="Lights" width='100%' />
                                <h3>História</h3>
                                <p>Os jogadores assumem o controle do protagonista Link, que é encarregado de restaurar a paz ao Reino de Hyrule depois do maligno feiticeiro Yuga ter sequestrado a princesa Zelda e escapado por um portal até mundo arruinado de Lorule. </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda43} alt="Nature" width='100%' />
                                <h3>Jogabilidade</h3>
                                <p>Uma das novidades é a transformação de Link em pintura tornando-o capaz de se mover pelas paredes. O jogador deve, portanto, usar este mecanismo para explorar o mundo de um novo ângulo para chegar a locais inacessíveis ou resolver enigmas.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda44} alt="Mountains" width='100%' />
                                <h3>Curiosidade</h3>
                                <p>E uma curiosidade chamou a atenção: A Link Between Worlds começou como uma sequência de Spirit Tracks (DS) e não de A Link to the Past (SNES).</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={zeldam4} alt="Bear" width='100%' />
                        <h3>Ctrl de aventuras</h3>
                        <p>A história se passa em uma Hyrule devastada e pequena. Após Ganon e seus lacaios invadirem o reino para roubar a Triforce, a princesa Zelda divide a Triforce da sabedoria em oito pedaços para impedir o vilão de obtê-la. Cabe a Link juntar tudo e derrotar o antagonista.</p>
                    </div>

                </div>
            </S.tata>
            {/*quinto jogo do zelda*/}
     

        </section >

    )
}