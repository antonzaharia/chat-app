export function signup (user) {
    return(dispatch) => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then((resp) => resp.json())
        .then((result) => {
            if("errors" in result) {
                dispatch({type: "FAILED", payload: result.errors})
            } else {
                dispatch({type: "SIGNUP", payload: result})
            }
        })
    }
}

const checkLoggedInStatus = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/logged_in", {
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(data => dispatch(setCurrentUser(data)))
    } 
}

const setCurrentUser = (data) => ({
    type: "SET_CURRENT_USER",
    payload: data
})