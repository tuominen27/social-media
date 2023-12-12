import React from 'react'
//Käytettävät komponentit
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

//Material-ui/core avulla helppo tyylittää nettisivu
//Luotu koko näkymä, Yhdistetty Navbar sekä Home komponentti samaan funktioon.

const App = () => (
    <Container maxWidth="lg">
        <Navbar />
        <Home />
    </Container>
)

export default App;