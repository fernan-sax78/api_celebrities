import styles from './header.module.scss'



function Header() {
  return (
    <div className = {styles.header}>
        <h4>
            <a href="#footer_portfolio">Titodev</a>
        </h4>
        <div className = {styles.background_} ></div>
          <h1 className = {styles.h1_}>Celebrities</h1>
    </div>
  )
}

export default Header
