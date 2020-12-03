export function loadConversations (userId){
    return(dispatch) => {
        fetch(`http://localhost:3000/users/${userId}/conversations`)
        .then(resp => resp.json())
        .then( data => dispatch({type: "LOAD_CONVERSATIONS", payload: data}))
    }
}
export function createConversation (email) {
    return(dispatch) => {
        fetch("http://localhost:3000/conversations", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(email)
        })
        .then(resp => resp.json())
        .then( data => console.log(data))
        .catch( error => console.log(error))
    }
}