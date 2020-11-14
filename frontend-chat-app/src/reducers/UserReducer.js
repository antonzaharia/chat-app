export default function UserReducer(
  state = { currentUser: null, requesting: false, errors: false , loggedIn: false},
  action
) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload, loggedIn: true };
    case "SIGNUP":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: true
      }
    case "SET_CURRENT_USER":
      return {
        ...state, 
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in
      }
    case "LOGOUT": 
    console.log(action.payload)
      return {
        ...state, 
        loggedIn: false
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
