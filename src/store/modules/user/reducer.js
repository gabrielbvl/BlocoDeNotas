import { ADD_COMMENT, REM_COMMENT } from "./actionTypes"

const initialState = { name: "Gabriel", comments: [] }

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return action.updateUser
        case REM_COMMENT:
            return action.updateUser
        default:
            return state
    }
}

export default userReducer