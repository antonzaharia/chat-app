export function updateNotification(data) {
  return (dispatch) => {
    fetch(
      `http://localhost:3000/users/${data.userId}/notifications/${data.notificationId}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "UPDATE_NOTIFICATION", payload: data }))
      .catch((error) => console.log(error));
  };
}
