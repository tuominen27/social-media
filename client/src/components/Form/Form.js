import React, { useState, useEffect } from "react"
//Käytettävät formit suoraan material-uista
import { TextField, Button, Typography, Paper } from "@material-ui/core"
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"

import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

//Luotu formi, joka luo osan jossa voi tehdä julkaisun. Käytetty tyylejä suoraan styles tiedostosta hyödyntäen UseStylesiä

const Form = ({ currentId, setCurrentId }) => {
    //Muuttujat joiden avulla voidaan määrittää kaikki tekstikenttään tarvittavat tilat
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const classes = useStyles()
    const dispatch = useDispatch()


    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const clear = () => {
        setCurrentId(0)
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    }
    //Lähetetään dispatchin avulla 
    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId) {
            dispatch(updatePost(currentId , postData))
            clear()
        } else{
            dispatch(createPost(postData))
            clear()
        }
    }

    return(
        //Luodaan tässä koko formi, joka on Paer mallinen
        //Handler funktioilla saatu toiminnot formeille
        //...postData jaetaan, jotta voidaan muokata vain kyseisen muuttujan teittyä arvoa
        //classes.root ja classes.form saadaan suoraan tyyleistä
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Parhaiden tulosten luominen</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                <div className={classes.fileInput}><FileBase type="file" multiplse={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form