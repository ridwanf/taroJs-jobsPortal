import { APPLY_JOB } from "../constants/user"

const userInitialState = {
  credit: 5
}

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case APPLY_JOB:
      return {
        ...state,
        credit: state.credit - 1
      }
    default:
      return state
  }
}

