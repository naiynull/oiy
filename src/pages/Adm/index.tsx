import * as S from "./styles";
import { ComponentHeader } from "../../components"
import fundo from "../../assets/geral/fundo04.jpg"

export function Adm() {
  return (
    <section style={{
      height:'100vh',
      backgroundImage: `url(${fundo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
  }}>
         
      <ComponentHeader />
      <S.Section>
      <h1 id="a">Área Administrativa</h1>
    </S.Section>
    </section>
  );
};

export default Adm;