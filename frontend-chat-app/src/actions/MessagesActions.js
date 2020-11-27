export function create(message) {
    return(dispatch) => {
        fetch("http://localhost:3000/messages", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(message)
        })
        .then(resp => resp.json())
        .then( data => console.log(data))
        .catch( error => console.log(error))
    }
}
