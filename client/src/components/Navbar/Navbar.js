import React from "react"
import { AppBar, Typography  } from '@material-ui/core'

import useStyles from './styles'
import parhaat from '../../images/parhaat.png'

//Navigointibaari luotu, löytyy pelkkä otsikko, voisi olla enemmänkin.

const Navbar = () => {
    const classes = useStyles()
    
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant="h2" align="center">Parhaat tulokset</Typography>
                <img className={classes.image} src={parhaat} alt="icon" height="60" />
            </div>
        </AppBar>
    )
}

export default Navbar