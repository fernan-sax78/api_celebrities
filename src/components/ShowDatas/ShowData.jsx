import { useEffect , useState , useRef } from "react";
import styles from './showData.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader/Loader";
import { fetchData , charge_children } from "@/functions/fetch";





 function ShowData(props) {

  const { inputValue } = props;

  const [Listing, setListing] = useState([]);
  const [loading , setLoading] = useState(true);
  const [mess , setMess] = useState('');

  const ref = useRef();
  


  useEffect(() => {
    
    fetchData(setListing , setLoading);
    charge_children(ref , setMess , inputValue );

  }, [inputValue]);

    
  return (
    
    <section ref = {ref}>

        {loading ? <Loader /> : ''}
        {mess}
        
        <div className = {styles.main} >

      {  Listing.filter((item) => {

       //console.log(ref)

         return   item.lastname.toUpperCase().includes(inputValue) ;

      })
      .slice( 0 , 12)
      .map((item ) => (
        
            
         <div className = {`${styles.card}`} key={item._id} >
          
            <img src= {item.photo} alt="photo"/>
           
               <h2 className  = {styles.name_celebrity} >{item.firstname} {item.lastname}</h2>
               
               <div className  = {styles.desc_cont}>

                   <p>
                    In vita fino a {item.age} anni.<br/> {item.little_desc}
                   </p>
                   <a href= {item.link_celbrity_wiki} className = {styles.button} target = "_blank">
                     Find out more 
                     <span className = {styles.material_symbols_outlined}>
                       <FontAwesomeIcon icon = {faArrowRight}/>
                     </span>
                   </a>
                
               </div>
            </div>
          
        ))
      }
        
     
      </div>
     
    </section>
  );
}

export default ShowData
