import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'

export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload)
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            return action.payload
        case CREATE:
<<<<<<< HEAD
            return [ ...posts, action.payload]
=======
            return [ ... posts, action.payload]
>>>>>>> ee88868 (Revert "Pieniä korjauksia")
        default:
            return posts
    }
}