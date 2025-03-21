import { Outlet } from "react-router-dom"
import { Navigation, Footer } from "../index"

function Layout() {
  return (
    <div>
        <Navigation />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout