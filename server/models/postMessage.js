import mongoose from 'mongoose'

//Luotu mongoosen avulla julkaisun rakenne, mongoosen Hyödynnetty mongoosen Skeemaa.

//Määritetty mitä julkaisussa täytyy olla, jotta voi julkaista
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

//Muutettu skeema modeliksi, joten voidaan eksportata model.
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage