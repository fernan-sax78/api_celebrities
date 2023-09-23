import styles from './empty.module.scss'

function Empty(props) {
  return (
    <div>
      <h3 className = {styles.not_found_mess}>{props.value} Doesn't exist, try again</h3>
    </div>
  )
}

export default Empty;
