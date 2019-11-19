import {
    createStore
} from 'redux';

//创建一个仓库
const counter = (state = {
    SearchText: '',
    Gallery: {
        show: false,
        imgUrl: ''
    }
}, action) => {
    switch (action.type) {
        case 'SETSEARCHTEXT':
            return {
                ...state,
                SearchText: action.SearchText
            }
        case 'SETGALLERY':
            return {
                ...state,
                Gallery: action.Gallery
            }
        default:
            return state

    }
}
const store = createStore(counter)


export default store;