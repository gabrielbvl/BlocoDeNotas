import { addComment, rmvComment } from "./actions";

export const addCommentThunk = (comment) => {
    return (dispatch, getState) => {
        const { user } = getState()
        const updateUser = {...user, comments: [...user.comments, comment]}
        dispatch(addComment(updateUser))
    }
}

export const removeCommentThunk = (comment) => {
    return (dispatch, getState) => {
        const { user } = getState()
        let filter = user.comments.filter((item) => {
            return item !== comment
        })
        const updateList = {...user, comments: filter}
        dispatch(rmvComment(updateList))
    }
}