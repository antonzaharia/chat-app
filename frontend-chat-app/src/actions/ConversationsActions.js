export function load(user) {
    return(dispatch) => {
        console.log(user)
        fetch(`http://localhost:3000/users/${user.id}/user-conversations`, {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then( data => dispatch({type: "LOAD", payload: data}))
    }
}
