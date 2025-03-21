import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import st from "./UserPosts.module.css";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const {userId} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, [userId]);


  return (
    <div className={st.postsContainer}>
      {
        posts.length > 0 ? (
            posts.map((post) => {
              return (
                <NavLink to={`/comments/${post.id}`} key={post.id}>
                    <div className={st.postBox}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                </NavLink>
              );
            })
        ) : (
            <h2>Posts Not Found !</h2>
        )
      }
    </div>
  );
};

export default UserPosts;