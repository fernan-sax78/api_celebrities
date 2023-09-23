import Empty from "@/components/Empty_mess/Empty";

export  const fetchData = async (setListing , setLoading) => {
      
  const api_ = process.env.NEXT_PUBLIC_NOT_API_CELEBRITIES;
     
      const response = await fetch(api_);
      const json = await response.json();
      setListing(json);
      setLoading(false);
      
    };

export  const charge_children = (el , setMess , inputValue) => {
  
    if (el.current.lastChild.hasChildNodes()) {
      setMess('')
    }else{
      setMess(<Empty value = {inputValue}/>)
    }
  
  }