import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`

  background-color:none;
  border-bottom: none;
  display: flex;
  height: 3rem;
  width: 100%;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
  }
  nav{
    width: 90%;
    padding-left:2rem;
  }
  img{
    width:50px;
    
  }
  nav ul{
    padding-top: 1rem;
    width: 100%;
    list-style-type:none;
    display:flex;
    align-items:center;
    font-size:26px;
    justify-content:space-evenly;
    font-family: 'The Wild Breath of Zelda', sans-serif;
                                                
  }
  nav ul a{
    text-decoration:none;
    color: ${colors.white}
  }
  nav ul li:hover{
  text-decoration: underline;
  color:${colors.white}
  
       
}
#ari{
width: 40px;
}

`

export const NavBar = styled.nav`
  /* Navegação */

background-color: none;
`

export const ComponentHamburguer = styled.section`
  aside {
    display: none;
  }
  @media (max-width: 840px) {
    aside {
      display: block;
    }
    ul {
      display: none;
    }
    grid-template-columns: auto auto auto;
    
  }
`