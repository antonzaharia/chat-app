export function load(user) {
    return(dispatch) => {
        fetch(`http://localhost:3000/users/${user.id}/conversations`, {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({user_id: user.id})
        })
        .then(resp > resp.json())
        .then( data => console.log(data))
        // .then( data => dispatch({type: "LOAD", payload: data}))
    }
}