export default function UserReducer(
  state = { currentUser: null, errors: false , loggedIn: false},
  action
) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload.user, loggedIn: true };
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
      return {
        ...state, 
        currentUser: null,
        loggedIn: false
      }
    case "REG_ERROR":
        return {
          ...state,
          errors: action.payload
        }
    case "REMOVE_ERRORS":
      return {...state, errors: false}
    default:
      return state;
  }
}
