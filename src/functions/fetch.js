import Empty from "@/components/Empty_mess/Empty";
import { useEffect } from "react";
const api_ = process.env.NEXT_PUBLIC_NOT_API_CELEBRITIES;

export const fetchData = async (setListing , setLoading) => {
          
       try {
      const response = await fetch(api_);
      const json = await response.json();
      setListing(json);
      setLoading(false);
       } catch (error) {
        console.error(error);
       }
      
    };

export  const charge_children = (el , setMess , inputValue ) => {
    

    if (el.current === null) {
      setMess(<Empty value = {inputValue}/>)
    }else{
      setMess('')
    }
  
  }