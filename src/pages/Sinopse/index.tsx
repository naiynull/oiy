import * as S from "./styles"
import teste from "../../assets/fundo01.jpg"
import fundo from "../../assets/fundo.gif"
{/*imagens do zelda 01*/}
import zelda11 from "../../assets/zelamarro.avif"
import zelda12 from "../../assets/zeldeacenasjogo1.jpg"
import zelda13 from "../../assets/zeldaparte1.avif"
import zelda14 from "../../assets/zeldacasando.webp"
import zeldam from "../../assets/wallpaperzelda01.jpg"
{/*imagens do zelda 02*/}
import zelda21 from "../../assets/zelda_a2.avif"
import zelda22 from "../../assets/zelda_b2.jpg"
import zelda23 from "../../assets/zelda_c2.jpg"
import zelda24 from "../../assets/zelda_d2.webp"
import zeldam2 from "../../assets/wallpaperzelda2.jpg"

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
                    <p>Resize the browser window to see the responsive effect.</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={zelda11} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda12} alt="Lights" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda13} alt="Nature" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda14} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={zeldam} alt="Bear" width='100%' />
                        <h3>Some Other Work</h3>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                    </div>

                </div>

                <div className="main">

                    <h1>The Legend of Zelda: Link's Awakening</h1>


                    <h2>1993</h2>
                    <p>Resize the browser window to see the responsive effect.</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={zelda21} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda22} alt="Lights" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda23} alt="Nature" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={zelda24} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={zeldam2} alt="Bear" width='100%' />
                        <h3>Some Other Work</h3>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                    </div>

                </div>
            </S.textot>
            <S.tata>

                <div className="main">

                    <h1>MYLOGO.COM</h1>


                    <h2>PORTFOLIO</h2>
                    <p>Resize the browser window to see the responsive effect.</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Lights" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Nature" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={teste} alt="Bear" width='100%' />
                        <h3>Some Other Work</h3>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                    </div>

                </div>

                <div className="main">

                    <h1>MYLOGO.COM</h1>


                    <h2>PORTFOLIO</h2>
                    <p>Resize the browser window to see the responsive effect.</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Lights" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Nature" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={teste} alt="Bear" width='100%' />
                        <h3>Some Other Work</h3>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                    </div>

                </div>
          </S.tata>
            <S.tata>
                <div className="main">

                    <h1>MYLOGO.COM</h1>


                    <h2>PORTFOLIO</h2>
                    <p>Resize the browser window to see the responsive effect.</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Lights" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Nature" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={teste} alt="Bear" width='100%' />
                        <h3>Some Other Work</h3>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                    </div>

                </div>
                <div className="main">

                    <h1>MYLOGO.COM</h1>


                    <h2>PORTFOLIO</h2>
                    <p>Resize the browser window to see the responsive effect.</p>

                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Lights" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Nature" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <img src={teste} alt="Mountains" width='100%' />
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <img src={teste} alt="Bear" width='100%' />
                        <h3>Some Other Work</h3>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                        <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
                    </div>

                </div>

            </S.tata>
        </section>

    )
}