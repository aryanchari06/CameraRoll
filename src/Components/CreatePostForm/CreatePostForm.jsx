import React from 'react'

function CreatePostForm({
    display = 'hidden'
}) {
    const closeForm = (e) => {
        e.target.parentElement.parentElement.style.display = 'none'
    }
    return (
        <div className={`absolute top-[20%] left-[5%] mx-[30%] m-10 ${display}`} id='post-form-container'>
            <div className='relative p-10 bg-white bg-opacity-90 rounded-lg  shadow-xl'>
                <h2 className='text-4xl text-center text-black my-4'>Create your post</h2>
                <div className='flex flex-col gap-4 w-3/5 my-4'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="Caption" className='text-black'>Caption:</label>
                        <input type="text" name="Caption" id="" className='bg-white shadow-lg outline-none p-2 text-black rounded-lg' placeholder='Enter a caption' />
                    </div>

                    <div className='flex flex-col gap-1'>

                        <label htmlFor="Image" className='text-black'>Upload image here:</label>
                        <input type="file" name="" id="" className='bg-white rounded-md p-2 bg-opacity-60' />
                    </div>
                </div>

                <div className='m-0 p-0 flex items-center justify-center'>
                    <button
                        className='bg-gray-500 text-white p-3 shadow-md hover:bg-white hover:text-gray-500 hover:duration-300 text-lg rounded-lg '

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
