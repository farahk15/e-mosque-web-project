import React, { memo, useContext, useEffect, useState } from 'react'
import "./Temp.css"
import { ApiContext } from '../../context/APIContext';


const Temp = ({counter180 , mode}) => {
  let _temp = null;
  const [temp , setTemp] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/temp", {
          method: "GET"
        });
  
        if (response.ok) {
          const data = await response.text();
          const splitData = data.split(" ");
          if (splitData.length >= 7) {
            const tempValue = splitData[6].split(".")[0];
            setTemp(tempValue);
          } else {
            console.error("Unexpected response format:", data);
          }
        } else {
          console.error("Fetch failed with status:", response.status);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
  
    fetchData();
  }, [counter180]);

  const { userStyles } = useContext(ApiContext); 
  
  const TempStyle = {
    color: userStyles.TempreatureColor };

  return (
    
  <div className='TempContainer' style={TempStyle}>
    <p>{!mode ? 
      (<><span>{temp}</span> <span>°C</span></> )  : 
      (<><span>{temp}</span> <span>°F</span></> ) 
      }
      </p>
  </div>

    
    )

}

export default React.memo(Temp);