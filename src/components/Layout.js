import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../assets/Layout.module.scss"

document.body.style.backgroundColor = "grey";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      
      <main className={styles.main}>
        {props.children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout