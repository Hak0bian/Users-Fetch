import { NavLink } from "react-router-dom"
import { UserCard } from "../../components"
import st from "./Users.module.css"

const Users = ({users}) => {
  return (
    <section>
      <div className={st.container}>
        {users.map(user => (
          <NavLink to={`/posts/${user.id}`} key={user.id}>
            <UserCard key={user.id} user={user}/>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Users