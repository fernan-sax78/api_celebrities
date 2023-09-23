import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { scroll_effect } from "@/functions/scroll";
import styles from './scroll.module.scss'

function ButtonScrollTop() {
  return (
    <a onClick = {scroll_effect} className = {styles.arrowUp}>
        <FontAwesomeIcon 
        icon={faArrowUp}
         />
    </a>
  )
}

export default ButtonScrollTop
