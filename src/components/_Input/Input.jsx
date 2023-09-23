/* "use client"; */


import ShowData from '../ShowDatas/ShowData';
import styles from './input.module.scss';
import { useState } from 'react';






function Input() {


const [input , setInput] = useState('');


  return (
    <>
<div className= {`${styles.form__group}`}>
  <input
  type="input"
  className= {styles.form__field} 
  placeholder="search your favorite celebrity by his lastname" 
  name="name" id='name' 
  onChange = {(ev) => setInput(ev.target.value)}
  required
  />
  <label htmlFor="name" className= {styles.form__label}>Celebrity</label>
</div>

   <ShowData inputValue = {input.toUpperCase()}/>
   
   </>
  )
}

export default Input;
