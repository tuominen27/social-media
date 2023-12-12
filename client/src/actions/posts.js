import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'
//Importataan kaikki api tiedostosta
import * as api from '../api/index'

//Luotu toiminnot, joilla saadaan julkaisujen muokkaamiset ja julkaisemiset aikaiseksi

//Käytetään redux-thunkia, jonka avulla voidaan määrittää nuolifunktio
//käyttäen dispatcia, jolloin on madollista käyttää asynkronisia toimintoja

//Toiminnan luoja funktiot
export const getPosts = () => async (dispatch) => {
    try {
        //Haetaan kaikki apin data käyttäen metodia fetchPost()
        //Saadaan siis vastaus apista eli back-endistä
        const { data } = await api.fetchPosts()

        //Lähetetään toiminto back-endistä
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//Kun toiminta on lähetetty useEffect funktiosta, reducer kanisosta haetaan
// posts logiikka

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)

        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error)
    }
}