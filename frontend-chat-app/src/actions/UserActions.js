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
export function login(user) {
    return(dispatch) => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
        .then(data => dispatch(checkStatus("LOGIN", data)))
    }
}

export function logout() {
    return(dispatch) => {
        fetch("http://localhost:3000/sessions", {
            method: "DELETE",
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: "LOGOUT", payload: data}))
    }
}

export const checkLoggedInStatus = () => {
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
const checkStatus = (type, data) => {
    if(data.status === 401){
        return {type: "LOGIN_ERROR", payload: "Incorrect Credentials"}
    } else if (data.status === 500 ){
        return {type: "SIGNUP_ERROR", payload: data.errors}
    } else {
        return {type: type, payload: data}
    }
}