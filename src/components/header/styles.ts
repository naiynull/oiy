import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`

  background-color: none;
  border-bottom: none;
  display: flex;
  height: 3rem;
  width: 100%;

  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    @media (max-width: 840px) {
      display: none;
    }
  }

  nav {
    width: 100%;
    padding-left: 2rem;
    display: flex;
    align-items: center; /* Adicionado para centralizar verticalmente */
    justify-content: space-between; /* Adicionado para espaçar os elementos */
  }

  img {
    width: 50px;
  }

  nav ul {
    padding-top: 1rem;
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 26px;
    justify-content: space-evenly;
    font-family: 'The Wild Breath of Zelda', sans-serif;
  }

  nav ul a {
    display: flex;
    text-decoration: none;
    color: ${colors.white};
    padding:6rem;
  }

  nav ul li:hover {
    text-decoration: underline;
    color: ${colors.white};
  }

  /* Adicionado estilo para o botão de logout */
  .locad {
    display: flex;
    align-items: center;
  }

  button {
    background: none;
    border: none;
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  /* Adicionado estilo para os links de login e cadastro */
  ul:not(.locad) {
    display: flex;
    align-items: center;
  }

  ul:not(.locad) li {
    margin-right: 1rem;
  }
`;
export const NavBar = styled.nav`
  /* Navegação */
  background-color: none;
  @media (max-width: 840px) {
    display: none;
  }
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