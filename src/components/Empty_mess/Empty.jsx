import styles from './empty.module.scss'

function Empty(props) {
  return (
    
      <p className = {styles.not_found_mess}>{props.value} no exist</p>
    
  )
}

export default Empty;
