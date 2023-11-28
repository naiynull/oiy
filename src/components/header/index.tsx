import * as S from "./styles"
import logo from "../../assets/geral/logo.png"
import { ComponentHamburguer } from "../index"
import { Link, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";


export function Header() {
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
  return (
    <>
      <S.ComponentHamburguer>
        <S.Header>
          <picture>
            <img src={logo} alt="Logo" />
          </picture>
          <S.NavBar>
            <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/persoagens">Personagens</a>
              </li>
              <li>
                <a href="/sinopse">Sinopse</a>
              </li>
              </ul>
              {
                user ? (
                  <ul>
                    <li>
                      <Link to="/adm/message">Mensagem</Link>
                    </li>
                    <li>
                      <button onClick={logout}>{user.name} <GrLogout /></button>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    </ul>
                )
              }
            </nav>
          </S.NavBar>
        </S.Header>
      </S.ComponentHamburguer>
      <ComponentHamburguer />
    </>
  )
}