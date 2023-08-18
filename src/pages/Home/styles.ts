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
 
    #li-cads {
        display: flex;
        border: none;
        padding: 20px;
        font-weight: bold;
        font-size: 28px;
        text-transform: uppercase;
        color: ${colors.white};
        text-decoration: none;
        outline: none;
        border-radius: 17px;
    }

    #li-cads:hover {
        background-color: ${colors.lite};
        width: 18%;
        height: 80px;
    }

    #li-cads {
        width: 17%;
        height: 20px;
        background: linear-gradient(180deg, #5BE8C6 0%, rgba(146, 185, 175, 0.00) 100%);
        transition: width 2s, height 3s;
    }

`

export const Video = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-right:4rem;
    video{
        width: 300px;
        padding-left: 3rem;
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

