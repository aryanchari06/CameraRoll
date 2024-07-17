import { createSlice, nanoid } from "@reduxjs/toolkit";
import { comment } from "postcss";

const initialState = {
    posts: [{
        id: 1,
        caption: 'First post',
        url: 'https://images.pexels.com/photos/25858940/pexels-photo-25858940/free-photo-of-shape-photography-triangle-in-the-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // comments: ['good click', 'nice picture']
        comments: [{
            id: '1a',
            user: 'User1',
            comment: 'good click'
        },
        {
            id: '2a',
            user: 'User2',
            comment: 'wow nice picture'
        }
        ]

    }]
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
            console.log(action.payload)
            state.posts.push(post)
        }
    }
})

export const { addCard } = cardSlice.actions

export default cardSlice.reducer