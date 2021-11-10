

export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const SET_LOGGEDIN_STATUS = 'SET_LOGGEDIN_STATUS';
export function addMovie(movie) {
    console.log("ddhbhdhdh", movie)
    return {
        type: ADD_MOVIE,
        payload: movie
    };
}

export function deleteMovie(id) {
    /////
    return {
        type: DELETE_MOVIE,
        payload: id
    };
}

export function setLoggedInStatus(status) {
    return {
        type: SET_LOGGEDIN_STATUS,
        payload: status,
        edited: !status
    }
}