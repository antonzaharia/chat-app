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