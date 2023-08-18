import { Routes, Route } from "react-router-dom"
import { PageHome, PagePersonagens, PageSinopse,  } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
        <Route path="/personagem" element={< PagePersonagens />} />
        <Route path="/" element={<PageHome />} />
        <Route path="/sinopse" element={<PageSinopse />} />
    </Routes>
  )
}