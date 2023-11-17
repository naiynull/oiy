import * as S from "./styles"
import logo from "../../assets/geral/logo.png"
import { ComponentHamburguer } from "../index"
import { useEffect, useState } from "react"


export function Header() {
  return (
    <>
      <S.ComponentHamburguer>
        <S.Header>
          <picture>
            <img src={logo} alt="Logo" />
          </picture>
          <S.NavBar>
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
          </S.NavBar>
        </S.Header>
      </S.ComponentHamburguer>

      <ComponentHamburguer />
    </>
  )
}