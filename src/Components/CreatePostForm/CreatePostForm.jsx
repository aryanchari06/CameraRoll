import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../../features/cardsSlice'

function CreatePostForm({
    display
}) {
    const [caption, setCaption] = useState('')
    const [imageURL, setImageURL] = useState('')

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const closeForm = () => {
        document.getElementById('post-form-container').style.display = 'none'
    }

    return (
        <div className={`absolute top-[20%] mx-[30%] w-2/6 m-10 ${display} bg-white bg-opacity-40 backdrop-blur-lg backdrop-brightness-95 backdrop-opacity-90 rounded-xl `} id='post-form-container'>
            <div className='relative p-10 rounded-lg  shadow-xl'>
                <h2 className='text-4xl text-center text-black my-4'>Create your post</h2>
                <div className='flex flex-col gap-4 w-5/5 my-4'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="Caption" className='text-black'>Caption:</label>
                        <input
                            type="text"
                            name="Caption"
                            className='bg-white bg-opacity-65 focus:bg-opacity-100 shadow-lg outline-none p-2 text-black rounded-lg' placeholder='Enter a caption'
                            onChange={(e) => { setCaption(e.currentTarget.value) }} />
                    </div>

                    <div className='flex flex-col gap-1'>

                        <label htmlFor="Image" className='text-black'>Enter image URL:</label>
                        <input
                            type="text"
                            name="Caption"
                            className='bg-white bg-opacity-65 focus:bg-opacity-100 shadow-lg outline-none p-2 text-black rounded-lg' placeholder='Enter a caption'
                            onChange={(e) => { setImageURL(e.currentTarget.value) }}
                        />
                        {/* <input type="file" name="" id="" className='bg-white rounded-md p-2 bg-opacity-60' /> */}
                    </div>
                </div>

                <div className='m-0 p-0 flex items-center justify-center'>
                    <button
                        className='bg-gray-500 text-white p-3 shadow-md hover:bg-white hover:text-gray-500 hover:duration-300 text-lg rounded-lg '
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch(addCard({caption, imageURL}))
                        }}

                    >Create Post</button>
                </div>

            </div>


            <button
                className='absolute top-[0] text-black right-0 text-3xl px-2'
                onClick={closeForm}
            ><i class="fa-solid fa-xmark"></i></button>
        </div>
    )
}

export default CreatePostForm
