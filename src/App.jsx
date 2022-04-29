import { useState } from 'react'
import Cupom from './components/Cupom'
import Container from '@mui/material/Container'

function App() {

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Cupom />
      </Container>      
    </div>
  )
}

export default App
