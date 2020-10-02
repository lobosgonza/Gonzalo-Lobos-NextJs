import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from "react"
import Title from "../components/title"
import SeccionesMain from "../components/seccionesMain"
import Container from 'react-bootstrap/Container'





export default function Home() {

  return (
    <Container>
    <body>
    <div>
      <Head>
        <title>Gonzalo Lobos | Desarrollador Web</title>
      </Head>

      <div>
        <Title/>

        <SeccionesMain/>



       
      </div>
    </div>
    </body>

      <footer >
          <p>Desarrollado por Gonzalo Lobos</p>
      </footer>
    </Container>
  )
}
