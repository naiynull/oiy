import { TextField } from "@mui/material"
import * as S from "./styles"

export const SaveUser = () => {
    cont [name,setName] = useState('')
    cont [email,setEmail] = useState('')
}
function handleSaveUser(){
    const data = {
        name,email
    }
    console.log('data')  
}

export function SaveUser () {
    return (
        <>
         <TextField label="Nome" 
         variant="outlied"
         value={name}
         onChange={ e=>setName(e.target.value)}
         />
         <TextField label="Email" 
          variant="outlied"
          value={email}
          onChange={ e=>setEmail (e.target.value)}
          /> 
         <button>Salvar</button>
       </>
    )
    }
  