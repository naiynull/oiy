import * as S from "./styles"
import fundo from "../../assets/geral/j.gif"
import { ComponentHeader } from "../../components"


export function Home() {
    return (

        <section style={{
            height:'100vh',
            backgroundImage: `url(${fundo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
        }}>
               
            <ComponentHeader />
         
         
          
            <S.Texs>
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
            </S.Texs> 
        </section>

    )
}