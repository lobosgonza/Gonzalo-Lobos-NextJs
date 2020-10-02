import SeccionesData from "../components/seccionesData"
import BotonesSet from "../components/botonesSet"
import QuienSoy from "../components/quienSoy"
import Habilidades from "../components/habilidades"
import Contacto from "../components/contacto"

import { useState } from "react"




function SeccionesMain(){

    return(
    <>
{/* Seccion Botones */}
    <BotonesSet
    array={SeccionesData}
        quienSoy={<QuienSoy/>}
        habilidades={<Habilidades/>}
        contacto={<Contacto/>}
    />
</>
)
}



export default SeccionesMain;