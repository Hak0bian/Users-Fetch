import userImg from "../../assets/user.jpg"
import st from "./UserCard.module.css"

const UserCard = ({user}) => {
  return (
    <div className={st.userCard}>
        <div className={st.imgDiv}>
            <img src={userImg} className={st.userImange}/>
        </div>

        <table>
            <tbody>
            <tr>
                <td>UName:</td>
                <td>{user.username}</td>
            </tr>
            <tr>
                <td>Name:</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{user.email}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UserCard