export default function UserReducer(
  state = { currentUser: null, requesting: false, errors: false , logged_in: false},
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
      return {
        ...state, 
        currentUser: action.payload.user,
        loggedIn: true
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
