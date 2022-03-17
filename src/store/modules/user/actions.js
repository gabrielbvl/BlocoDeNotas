import { ADD_COMMENT, REM_COMMENT } from "./actionTypes";

export const addComment = (updateUser) => ({
    type: ADD_COMMENT,
    updateUser
})

export const rmvComment = (updateUser) => ({
    type: REM_COMMENT,
    updateUser
})