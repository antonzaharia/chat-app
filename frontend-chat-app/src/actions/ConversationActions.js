export function loadConversations (userId){
    return(dispatch) => {
        fetch(`http://localhost:3000/users/${userId}/conversations`)
        .then(resp => resp.json())
        .then( data =>{ 
            console.log("Action", data)
            dispatch({type: "LOAD_CONVERSATIONS", payload: data})
        })
        
    }
}
export function createConversation (data) {
    return(dispatch) => {
        fetch(`http://localhost:3000/users/${data.userId}/conversations/`, {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then( data => console.log(data))
        .catch( error => console.log(error))
    }
}