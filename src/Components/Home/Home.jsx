import React from 'react'
import CreatePostForm from '../CreatePostForm/CreatePostForm'
import PostCard from '../PostCard/PostCard'
import AddPostCard from '../PostCard/AddPostCard'
import { useSelector } from 'react-redux'

function Home() {

  const posts = useSelector(state => state.posts)
  console.log(posts)
  return (
    <div className='bg-gray-400 m-0 p-10 min-h-[80vh]'>
      <div className='flex gap-4'>
        <ul>

          {
            posts.map((post) => (
              <li key={post.id}>
                <PostCard 
                caption={post.caption}
                imageUrl={post.url}
                comments={post.comments} />
              </li>
          ))
          }
        </ul>
        <AddPostCard />
      </div>
      <CreatePostForm />
    </div>
  )
}

export default Home
