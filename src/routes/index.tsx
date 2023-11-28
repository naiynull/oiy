import { Routes, Route } from "react-router-dom"
import { PageHome, PagePersonagens, PageSinopse, PageAdm, PageCadastrar, PageLogin} from "../pages"
import ProtectedRoute from "./ProtectedRoute"

export function RouteSoftware() {
  return (
    <Routes>

      <Route path="/" element={<PageHome />} />
      <Route path="/personagens" element={< PagePersonagens />} />
      <Route path="/sinopse" element={<PageSinopse />} />
      <Route path="/cadastrar" element={<PageCadastrar />} />
      <Route path="/login" element={<PageLogin />} />
      <Route element={<ProtectedRoute />} />
      <Route path="/adm" element={<PageAdm />} />
    </Routes>
  )
}
