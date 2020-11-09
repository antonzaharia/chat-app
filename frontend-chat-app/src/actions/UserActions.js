export function signup (user) {
    return(dispatch) => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then((resp) => resp.json())
        .then((result) => {
            console.log(result)
            if("errors" in result) {
                dispatch({type: "FAILED", payload: result.errors})
            } else {
                dispatch({type: "SIGNUP", payload: result})
            }
        })
    }
}