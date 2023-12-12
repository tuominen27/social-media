import React from "react"
import { Grid, CircularProgress } from '@material-ui/core'
//Haetaan data storesta.
import { useSelector } from 'react-redux'
import Post from './Post/Post'

import useStyles from './styles'

//Käsittelee kokonaisuudessaan jokaisen julkaisun esittämisen ja käy listan läpi, jotta ne voidaan sijoittaa näkyville.

const Posts = ({ setCurrentId }) => {
    //Käytetään redux-storea eli tilaa.
    //Käytetään posts koska reducers indexissä on myös posts
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts)
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts