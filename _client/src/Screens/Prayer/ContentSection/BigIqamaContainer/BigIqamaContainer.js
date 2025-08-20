import React, { useContext, useEffect, useState } from 'react'
import "./styles.css"
import { ApiContext } from '../../../../context/APIContext';
export const BigIqamaContainer = () => {
  const [counter, setCounter] = useState(59)

  const { userStyles  } = useContext(ApiContext);      

  const IqamaTimeColor = {
    color: userStyles.IqamaTimeColor };

  useEffect(()=>{

    let interval = setInterval( ()=>{      
      setCounter(counter - 1);
    }, 1000)

    if(counter === 1)
    {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  },[counter])

  return (
    <div className='bigIqamaContainer'>
      <div className='counter' style={IqamaTimeColor}>  {counter}</div>  
    </div>
  )
}
