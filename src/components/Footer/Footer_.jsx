import { useState } from 'react';
import styles from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  
  let date = new Date();
  let year = date.getFullYear()
  const [useDate , setUseDate] = useState(year - 2020);
  
 


  return (
<footer className = {styles.footer} id="footer_portfolio">
     <div className={styles.info}>
        
        <h3>
            {/* <i class="fa-solid fa-arrow-right"></i> */}
            <FontAwesomeIcon icon={faArrowRight} />
             <span>Visit My</span>
            <a href="#" > 😉 Portfolio</a> WebSite
        </h3>
     </div>
    <div className = {styles.info}>
        <h3>{year} titodev.uk " I ❤️ WEB "<span className = {styles.getYear} id="date_">{useDate} years of experience</span></h3>
     <div className= {styles.info}>
        <span className = {styles.span}>In this project I used my own API</span><br/><br/>
        <span>Nodejs-Express-MongoDB</span>
     </div>
     </div>

</footer>
  )
}

export default Footer;
