import React, {useState} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function QuienSoy (){

    return (
        
<Container>
<Row>
<Col md={6}>
<img className="img-profile margin-sides" src="/img-profile.jpg" alt="profile-img"/>
<p>Me llamo Gonzalo. Soy Ingeniero Comercial,fotógrafo publicitario y desarrollador Web. Poseo amplio conocimiento en negocios, diseño de campañas y gestión Web, por lo que puedo ser un buen aporte en grupos de Marketing al tener la capacidad interactuar y coordinar entre las multiples disciplinas que hay dentro.</p>
</Col>
<Col md={6} className="align-self-center">
<h3>Organización de campañas</h3>
<p>Expriencia en la planificacion, coordinación y difusión de campañas publicitarias.</p>
<h3>Diseño de Gráficos Publicitarios</h3>
<p>He trabajo en producciones fotográficas para distintas marcas y trabajo editorial.</p>
<h3>Desarrollo web</h3>
<p>Conocimiento en desarrollo Frontend y Backend.</p>
</Col>
</Row>
</Container>

        )
}


export default QuienSoy;