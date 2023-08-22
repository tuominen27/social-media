import React from 'react'
import { Container } from '@material-ui/core'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

const App = () => (
    <Container maxWidth="lg">
        <Navbar />
        <Home />
    </Container>
)

export default App;