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
          name: action.payload.name,
          email: action.payload.email
        },
        errors: action.payload.errors,
      };
    default:
      return state;
  }
}
