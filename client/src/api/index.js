//Käytetään axiosta api kutsujen käyttöön

import axios from 'axios'

//Osoitetaan käyttämään bacendin reittiä.
const url = 'http://localhost:3003/posts'

//Metodit, jotka hakevat tarvittavat julkaisut osoitteesta url. Hyödyntää axios kirjastoa
//exportataan metodit, jotta niitä voidaan käyttää
export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)