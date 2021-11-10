import * as Actions from '../actions';

const initialState = {
    movies: [],
    loggedIn: true,
    edited: false,
    
};

const MovieReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.ADD_MOVIE: {
            console.log("reducer")
            const movieList = [...state.movies];
            movieList.push(action.payload);
            return {
                ...state,
                movies: movieList
            }

        }
        case Actions.DELETE_MOVIE : {
            const movieList = {...state.movies};
            const filteredMovie = movieList.filter(movie => {return movie.id !== action.payload});
            return {
                ...state,
                movies: filteredMovie
            }

        }

        case Actions.SET_LOGGEDIN_STATUS: {
            return {
                ...state,
                loggedIn: action.payload,
                edited: action.edited
            }
        }
        default: {
           return state 
        }
    }
    // switch(action.type) {
    //     case Actions.SET_USER_ID: {
    //         return {
    //             ...state,
    //             userId: action.userId
    //         }
    //     }
        
    //     default: {
    //         return state;
    //     }
    // }
}
export default MovieReducer;
