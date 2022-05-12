import { useState } from 'react'
import Cupom from './components/Cupom'
import Container from '@mui/material/Container'

function App() {

  let cupoms = [
    {
      primeNinja: true,
      desconto: '5%',
      categoria: '',
      cupomNome: 'MOUSE52'
    },
    {
      primeNinja: false,
      desconto: '7%',
      categoria: '',
      cupomNome: 'TECLADO'
    },
    {
      primeNinja: true,
      desconto: '5%',
      categoria: '',
      cupomNome: 'FESTA1'
    },
    {
      primeNinja: false,
      desconto: '80%',
      categoria: 'placa de vídeo',
      cupomNome: 'GERENTETAMALUCO'
    },
    {
      primeNinja: false,
      desconto: '15%',
      categoria: 'casa > cama/mesa/banho',
      cupomNome: 'MAMAEFELIZ'
    },
    {
      primeNinja: false,
      desconto: '5%',
      categoria: 'casa > cozinha',
      cupomNome: 'COZINHA'
    }
  ]

  return (
    <div className="App" style={{backgroundColor:'#0060b1'}}>
      <Container maxWidth="md">
        {cupoms.map(cupom => {
          return <Cupom primeNinja={cupom.primeNinja} desconto={cupom.desconto} categoria={cupom.categoria} cupomNome={cupom.cupomNome} />
        })}
      </Container>      
    </div>
  )
}

export default App
