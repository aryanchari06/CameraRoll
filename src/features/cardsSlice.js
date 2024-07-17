import { createSlice, nanoid } from "@reduxjs/toolkit";
import { comment } from "postcss";

const initialState = {
    posts: [{
        id: 1,
        caption: 'First post',
        url: 'https://images.pexels.com/photos/25858940/pexels-photo-25858940/free-photo-of-shape-photography-triangle-in-the-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // comments: ['good click', 'nice picture']
        comments: [
            // {
            //     id: '1a',
            //     user: 'User1',
            //     comment: 'good click'
            // },

        ]

    },
    {
        id: 2,
        caption: 'Second post',
        url: 'https://images.pexels.com/photos/25858940/pexels-photo-25858940/free-photo-of-shape-photography-triangle-in-the-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // comments: ['good click', 'nice picture']
        comments: [
            // {
            //     id: '1a',
            //     user: 'User1',
            //     comment: 'good click'
            // },

        ]

    }
    ]
}

export const cardSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addCard: (state, action) => {
            const post = {
                id: nanoid(),
                caption: action.payload,
                url: action.payload
            }
            state.posts.push(post)
        },

        addComment: (state, action) => {
            const postID = action.payload.id
            const post = state.posts.find((post)=>(post.id===postID))
            const addedComment = {
                id: nanoid(),
                user: action.payload.userID,
                comment: action.payload.comment
            }
            post.comments.push(addedComment)
        }
    }
})

export const { addCard, addComment } = cardSlice.actions

export default cardSlice.reducer