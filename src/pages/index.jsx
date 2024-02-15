import Head from 'next/head'
import Footer from "@/components/Footer/Footer_";
import Header from "@/components/_Header/Header_";
import Input from "@/components/_Input/Input";
import ButtonScrollTop from "@/components/ButtonScrollTop/ButtonScrollTop";





function index() {
 
  return (
    <>
      <Head>
        <title>Celebrities API by titodev</title>
      </Head>
         
      <Header />
   
       <Input /> 

       <ButtonScrollTop />

       <Footer />


    </>
  )
}

export default index;
