import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout, NotFound, UserPosts, PostComments } from "./components"
import { Home, Users, Posts, Comments } from "./pages"
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    function getUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.error("Error fetching users:", error))
    }

    getUsers()
  }, [])
  

  return (
    <section>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/users' element={<Users users={users}/>} />
          <Route path='/posts' element={<Posts/>} /> 
          <Route path='/posts/:userId' element={<UserPosts/>} /> 
          <Route path='/comments' element={<Comments/>} />
          <Route path='/comments/:postId' element={<PostComments/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
