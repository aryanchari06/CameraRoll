import React from 'react'

function AddPostCard() {
    return (
        <div>
            <button>
                <div className='bg-white shadow-md text-black rounded-lg p-2 '>
                    <div id="post" className='p-8 flex flex-col gap-2 border-dashed border-[4px] border-gray-400 opacity-60 hover:opacity-100 hover:duration-200'>
                        <h2 className='text-xl text-gray-600'>Create a new post <br /><span><i className="fa-solid fa-plus m-4 text-4xl rounded-full border-[3px] border-gray-600 p-2"></i></span></h2>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default AddPostCard
