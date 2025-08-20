import React, { useContext } from 'react'
import "./styles.css"
import { EhdaaMedia, Media } from './ehdaaMedia';
import EhdaaMarquee from './EhdaaMarquee';
 
import { ApiContext } from '../../../../context/APIContext';


export const EhdaaContainer = ({isIhdaa,shortMessage}) => {
 
    const {language} = useContext(ApiContext);
    
   let  direction = "right"
   if (language["SelectedLanguage"] === "en")
   {
     direction = "left";    
   }
 
     return (
          <div className='EhdaaContainer'>
           <EhdaaMarquee direction={direction} speed={30} >
             <EhdaaMedia Text={shortMessage}/>
           </EhdaaMarquee>          
           
         </div>
        
       );
  
}
