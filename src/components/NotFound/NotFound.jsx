import error from "../../assets/404.jpg"
import st from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={st.errorDiv}>
        <img src={error}/>
    </div>
  )
}

export default NotFound