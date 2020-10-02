import Button from 'react-bootstrap/Button'
import React, {useState} from "react"

function BotonesSet(props) {
  
  const array = props.array;
  const quienSoy= props.quienSoy;

  const [buttonSelect, setButtonSelect] = useState("Hola")


function ClickSelect (event){
  const itemSelect = event.target.value;
setButtonSelect(() => {return itemSelect})
}

function SectionDisplay(){
  if(buttonSelect === "¿Quien Soy?"){return <h1>{props.quienSoy}</h1>}else if (buttonSelect==="Habilidades"){return <h1>{props.habilidades}</h1>}else if (buttonSelect === "Contacto"){return <h1>{props.contacto}</h1>}else{return <h1>{buttonSelect}</h1>}
  }

const buttonsArray=array.map(item => {
  return(
    <Button 
  onClick={ClickSelect} 
  value={item.title} 
  className="margin-sides" 
  variant="outline-light">
  {item.title}
  </Button>
    )
  })


return (
  <>
  {buttonsArray}
  <SectionDisplay
    quienSoy={props.quienSoy}
  />
  </>
  )


}






export default BotonesSet


