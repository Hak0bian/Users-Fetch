import st from "./Header.module.css"

function Header() {
  return (
    <header>
      <div className={st.container}>
        <h1>Welcome !</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis itaque necessitatibus, reprehenderit, dolore unde vero cupiditate nisi voluptas deleniti quidem vel porro aspernatur. Asperiores dicta dolorum dolore blanditiis dignissimos.</p>
      </div>
    </header>
  )
}

export default Header