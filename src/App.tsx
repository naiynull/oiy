import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteSoftware } from "./routes"
import { BrowserRouter } from "react-router-dom"
import {ToastContainer } from "react-toastify"
import { AuthProvider } from "../src/contexts/authContext"

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
      <AuthProvider>
      <RouteSoftware />
      </AuthProvider>
    </BrowserRouter>
  )
}
