import Comics from '../Actions/Comics';

const initialState = {
    comics: [],
    loading: false,
    selectedId: '',
    selectedComic: {},
    error: null
};

const comicsReducer =(state = initialState, action) => {
    const { type } = action;
    const { types } = Comics;
    switch(type) {
        case types.GET_COMICS_REQUESTED: 
            return {...state, loading: true };
        case types.GET_COMICS_COMPLETED:
            return { ...state, comics: action.payload, loading: false };
        case types.GET_COMICS_FAILED:
            return { ...state, loading: false, error: true };
        case types.SELECT_COMIC: 
            return { ...state, selectedComic: action.payload }
        default: 
            return state;
    }
};

export default comicsReducer;