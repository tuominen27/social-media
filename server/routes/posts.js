import express from 'express'

//Haettu post metodit controllereista
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
const router = express.Router()

//Määritetty mihin osoitteeseen toiminnot viittaavat. Haettu toiminnost kontrollereista. Samalla määritelty mikä
//Funktio toimii mistäkin osoitteesta saataville tiedoille.

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router