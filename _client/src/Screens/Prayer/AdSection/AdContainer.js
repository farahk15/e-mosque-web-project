import React, { useContext } from 'react'
import Marquee from '../../../components/Marquee/Marquee';
import "./styles.css"
import { Media } from './Media';
import whatsapp from "./images/whatsapp.png"
import facebook from "./images/facebook.png"
import phone from "./images/phone.png"
import { ApiContext } from '../../../context/APIContext';


export const AdContainer = () => {


  let  direction = "left"
  let  _phone = " +12 817 963900  "
  let  _whats = " +12 817 963900  "
  let  _face = " e-Mosque  المسجدالإلكتروني"

  // Hamzeh:
  const {language} = useContext(ApiContext);
  if (language["SelectedLanguage"] === "en")
  {
    direction = "left";
    _phone= " +12 817 963900  "
    _whats = " +12 817 963900  "
    _face = " e-Mosque  المسجدالإلكتروني"

  }else
  {
    direction = "right";
    _phone = "  +962  797600804  "
    _whats = "  +962  797600804  "
    _face = "e-Mosque  المسجدالإلكتروني"
  }

    return (
        <div>          
          <Marquee direction={direction} speed={30} >
              <Media  Text={_phone} icon={phone} />
              <Media   Text={_whats} icon={whatsapp}/>
              <Media   Text={_face} icon={facebook}/>
          </Marquee>
        </div>
      );
  
}
