import PostMessage from "../models/postMessage.js"
import mongoose from 'mongoose'

//Luotu kaikki toiminnost siihen kun palvelimelta tulee pyyntöjä ja kun sinne lähetetään pyyntöjä
//Luotu reittien händlerit, joita käytetään routes/posts tiedostossa.

//Exportataan suoraan funktion luomisen yhteydessä
export const getPosts = async (req, res) => {
    //käytetään try ja catchia, jotta pysytään perässä ongelmista
    try {
        //Haetaan kaikki julkaisut tietokannasta asynkronisena toimintana
        const postMessages = await PostMessage.find()

        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    //Määritetään rakenne julkIAULLW
    const post = req.body

    //Määritetään uusi julkaisu.
    const newPost = new PostMessage(post)

    try {
        //asynkroninen operaatio
        await newPost.save()

        //Julkaisu onnistui ja uusi julkaisu lähetetään
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    await PostMessage.findByIdAndRemove(id)

    res.json({ message: 'Post deleted succesfully' })
}

export const likePost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    res.json(updatedPost)
}