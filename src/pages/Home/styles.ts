import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const testo = styled.section`
 display: flex;
    justify-content:flex-end;
.texto{
    margin-top: 30vh;
    width: 40%;
    h1{
        padding-left: 6rem;
        text-decoration: none;
        border: none;
        font-size: 50px;
        color:${colors.white};
        font-family:'The Wild Breath of Zelda';
    }
    p{
        text-decoration: none;
        border: none;
        font-size: 30px;
        color:${colors.white}; 
    }
}
`


export const Texs = styled.section`
  li{
    display: flex;
    justify-content:center;
    margin-top: 37vh;
  }

    #li-cads {
        display: flex;
        text-align: center;
        border: none;
        font-size: 27px;
        text-transform: uppercase;
        color: ${colors.white};
        text-decoration: none;
        outline: none;
        border-radius: 17px;
        font-family: 'The Wild Breath of Zelda', sans-serif;
                                                
    }

    #li-cads:hover {
        background-color: ${colors.lite};
        width: 20%;
        height: 80px;
    }

    #li-cads {
        width: 17%;
        height: 20px;
        background: linear-gradient(180deg, #ABDBB8 0%, rgba(255, 255, 255, 0.00) 100%);
        transition: width 2s, height 3s;
    }
    @media(max-width: 1024px) {
        #li-cads {
            font-size: 17px;
        }
    }
    @media(max-width: 924px) {
        #li-cads {
            font-size: 17px;
        }
        li{
            margin-top: 27vh;
        }
    }
    @media(max-width: 716px) {
        #li-cads {
            font-size: 17px;
        }
        li{
            margin-top: 19vh;
        }
    }
    @media(max-width: 588px) {
        #li-cads {
            font-size: 12px;
        }
        li{
            margin-top: 13vh;
        }
    }
    @media(max-width: 450px) {
        #li-cads {
            font-size: 11px;
        }
        li{
            margin-top: 9vh;
        }
    }
    @media(max-width: 358px) {
        #li-cads {
            font-size: 10px;
        }
        li{
            margin-top: 7vh;
        }
    }
    @media(max-width: 320px) {
        #li-cads {
            font-size: 9px;
        }
        li{
            margin-top: 5vh;
        }
    }
`

export const Video = styled.section`
    display: flex;
    justify-content:flex-end;
    padding-right:4rem;
    margin-top:6rem;
    iframe{
        padding-left: 3rem;
        align-items:flex-end;
        -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
         filter: blur(5px);
    }
    iframe:hover{
        -webkit-filter: blur(0px); /* Safari 6.0 - 9.0 */
         filter: blur(0px);
    }
    .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
    margin-left: 10px;
}

`


