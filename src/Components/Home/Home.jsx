import React from 'react'
import CreatePostForm from '../CreatePostForm/CreatePostForm'
import PostCard from '../PostCard/PostCard'
import AddPostCard from '../PostCard/AddPostCard'

function Home() {
  return (
    <div className='bg-gray-400 m-0 p-10 min-h-[80vh]'>
      <div className='flex gap-4'>

        <PostCard />
        <PostCard />
        <AddPostCard />
      </div>
      <CreatePostForm />
    </div>
  )
}

export default Home
