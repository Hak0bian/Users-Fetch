import { NavLink } from "react-router-dom"
import { RxSketchLogo } from "react-icons/rx";
import st from "./Navigation.module.css"

function Navigation() {
  return (
    <nav className={st.nav}>
      <div className={st.container}>
        <div className={st.name}>
          <RxSketchLogo className={st.logo}/>
          <h1>RouterPage</h1>
        </div>
        <div className={st.navLinks}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
          <NavLink to='/comments'>Comments</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation