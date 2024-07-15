import React, { useState } from 'react'

function PostCard() {

  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [comment, setComment] = useState('')

  const comments = [
    {
      'user': 'User1',
      'comment': 'Wow good click'
    },
    {
      'user': 'User2',
      'comment': 'good click'
    },
    {
      'user': 'User3',
      'comment': 'nice click'
    },
  ]

  const [display, setDisplay] = useState('hidden')
  return (
    <div className='bg-white shadow-md text-black w-[23rem] rounded-lg '>
      <div id="post" className='p-8 flex flex-col gap-2'>
        <img
          src="https://images.pexels.com/photos/25858940/pexels-photo-25858940/free-photo-of-shape-photography-triangle-in-the-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className='h-80 rounded-md' />
        <h2 className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, est.</h2>
        <div id="actions" className='flex gap-4 items-start'>
          <button
            className='text-xl'
            onClick={() => {
              if (isLiked) {
                setIsLiked(false)
                setLikes(likes - 1)
              } else {
                setIsLiked(true)
                setLikes(likes + 1)
              }

            }}
          > {isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            &nbsp;{likes}</button>
          <button
            className='text-xl'
            onClick={() => display === 'hidden' ? setDisplay('block') : setDisplay('hidden')}
          ><i class="fa-regular fa-comment"></i> 0</button>

          <div className={`shadow-md rounded-md top-0 left-28 flex-col flex gap-1 p-1 ${display} bg-gray-200`}>
            <input
              type='text'
              className='overflow-auto  outline-none bg-transparent p-1'
              placeholder='Comment here...'
              onChange={(e) => {
                setComment(e.currentTarget.value)
              }}
            />
            <div className='flex gap-1'>

              <button
                className='bg-black text-white rounded-md px-2 py-1 text-sm'
                onClick={() => {
                  if (comment === '') return
                  console.log(comment, comments)
                  // comments.map((item)=>([...item, { }]))
                }}>Post</button>
              <button
                className='bg-black text-white rounded-md px-2  text-sm'
                onClick={() => setDisplay('hidden')}
              >Cancel</button>
            </div>
          </div>
        </div>

        <div id="comments">
          <h1 className='text-lg font-semibold'>Comments</h1>
          <ul>
            {
              comments.map((comment) => (
                <li><span className='font-semibold'>{comment.user}: </span>{comment.comment}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostCard
