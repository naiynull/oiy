import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const testo = styled.section`
.texto{
    padding-left: 1rem;
    justify-content:center;
    margin-top: 12vh;
    width: 40%;
    h1{
        padding-left: 3rem;
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
    padding-right:25rem;
    margin-top: 45vh;
  }

    #li-cads {
        display: flex;
        text-align: center;
        border: none;
        font-size: 38px;
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


