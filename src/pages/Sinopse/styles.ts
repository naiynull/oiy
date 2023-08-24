import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const Inicial = styled.main`
    height: 100vh;
`

export const tata = styled.section`
 
* {
  box-sizing: border-box;
}


/* Center website */
.main {
   
  max-width: 1000px;
  margin: auto;
}

h1 {
  font-size: 50px;
  word-break: break-all;
}

.row {
  margin: 8px -16px;
}

/* Adicione preenchimento ENTRE cada coluna*/
.row,
.row > .column {
  padding: 8px;
}

/* Crie quatro colunas iguais que flutuam uma ao lado da outra */
.column {
  float: left;
  width: 25%;
}

/* limpar depois de linhas */ 
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Content */
.content {
  background-color: white;
  padding: 10px;
}

/*Layout responsivo - cria um layout de duas colunas em vez de quatro colunas*/
@media screen and (max-width: 900px) {
  .column {
    width: 50%;
  }
}

/* Layout responsivo - faz com que as duas colunas sejam empilhadas uma sobre a outra, em vez de uma ao lado da outra */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
 `



