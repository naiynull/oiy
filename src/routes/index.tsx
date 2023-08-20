import { Routes, Route } from "react-router-dom"
import { PageHome, PagePersonagens, PageSinopse, PageCadastro  } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
       
        <Route path="/" element={<PageHome />} /> 
        <Route path="/personagem" element={< PagePersonagens />} />
        <Route path="/sinopse" element={<PageSinopse />} />
        <Route path="/cadastro" element={<PageCadastro />} />
    </Routes>
  )
}