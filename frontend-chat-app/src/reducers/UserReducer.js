export default function UserReducer(
  state = { currentUser: null, requesting: false, errors: false , loggedIn: false},
  action
) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "SIGNUP":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: true
      }
    case "SET_CURRENT_USER":
      console.log(action.payload)
      return {
        ...state, 
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in
      }
    case "FAILED":
        return {
          ...state,
          errors: action.payload
        }
    default:
      return state;
  }
}
