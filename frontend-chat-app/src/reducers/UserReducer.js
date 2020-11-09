export default function UserReducer(
  state = { user: null, requesting: false, errors: false },
  action
) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "SIGNUP":
      return {
        ...state,
        user: {
          check: action.payload
        }
      };
      case "FAILED":
        return {
          ...state,
          errors: action.payload
        }
    default:
      return state;
  }
}
