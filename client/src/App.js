import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import parhaat from './images/parhaat.png'
import useStyles from './styles'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return(
        <div>
            <Container maxidth = "lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className='classes.heading' variant="h2" align="center">Parhaat tulokset</Typography>
                    <img className='classes.image' src={parhaat} alt="parhaat" height="60" />
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;