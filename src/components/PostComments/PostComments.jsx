import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import st from "./PostComment.module.css"

const PostComments = () => {
  const [comments, setComments] = useState([])
  const {postId} = useParams();

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((res) => setComments(res))
  }, [postId])
    

  return (
    <div className={st.commContainer}>
      {
        comments.length > 0 ? (
          comments.map(comment => {
            return (
              <div key={comment.id}>
                  <p><span>Name:</span> {comment.name}</p>
                  <p><span>Email:</span> {comment.email}</p>
                  <p><span>Comment:</span> {comment.body}</p>
              </div>
            )
          })
        ) : (
            <h2>Comments Not Found !</h2>
        )
      }
    </div>
  )
}

export default PostComments