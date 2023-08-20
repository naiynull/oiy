import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const Inicial = styled.main`
    height: 100vh;
`


export const Igm = styled.section`
    display: flex;
    justify-content:flex-end;
    width: 100%;
    img{
        width: 76rem;
    }
 `

export const Texs = styled.section`
  li{
    display: flex;
    justify-content:center;
    margin-top: 12vh;
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
    justify-content:center;
    padding-right:4rem;
    align-items:flex-end;
    margin-top:55vh;
    video{
        width: 300px;
        padding-left: 3rem;
        align-items:flex-end;
    }

`
export const textot = styled.section`
    padding-top: 6rem;
    width: 40%;
    p{
    color:${colors.white};
    font-weight: bold;
    }
 `

