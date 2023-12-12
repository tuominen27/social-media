import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'

//reducer on funktio, joka hyväksyy tilan ja toiminnon.
export default (posts = [], action) => {
    //Käytetään switch komentoa
    switch (action.type) {
        //Luodaan kaikki tyypit.
        case DELETE:
            return posts.filter((post) => post._id !== action.payload)
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [ ...posts, action.payload]
        default:
            return posts
    }
}