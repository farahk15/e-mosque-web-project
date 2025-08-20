import React, { useContext, useEffect, useRef, useState} from "react";
import "./styles.css"; // Import the CSS file for styling

import { ScrollableContainer } from "./ScrollableContainer/ScrollableContainer";
import { ContentContext } from "../../../context/ContentContext";
import { AzkarContainer } from "./AzkarContainer/AzkarContainer";
import { BigIqamaContainer } from "./BigIqamaContainer/BigIqamaContainer";
import { EhdaaContainer } from "./EhdaaContainer/EhdaaContainer";

//Hazmah:
import { SilentMessageContainer } from "./SilentSection/SilentMessage";
import { ApiContext } from "../../../context/APIContext";


export const ContentContainer = () => {
  const [currentContent, setCurrentContent] = useState();
  const { userStyles,generalSettings } = useContext(ApiContext); 

  const {
    isContentHidden,
    isAzkarTime,
    isSelctedHadeeth,
    selectedHadeeth,
    isPrimaryMessage,
    PrimaryMessage,
    isBigIqama,
    shortMessage,  
    isIhdaa,  
    isShortMessage,
    //Hamzah:    
    isShowSilentMessage,
    showSilentMessage,
      
    
  } = useContext(ContentContext);

  useEffect(() => {
    if(isBigIqama) setCurrentContent(<BigIqamaContainer/>)
    else if(isAzkarTime) setCurrentContent(<AzkarContainer/>)
    else setCurrentContent(<ScrollableContainer
    isSelctedHadeeth={isSelctedHadeeth}
    selectedHadeeth={selectedHadeeth}
    isPrimaryMessage={isPrimaryMessage}
    PrimaryMessage={PrimaryMessage}
    // //Hamzah:
    isShowSilentMessage={isShowSilentMessage}
    showSilentMessage={showSilentMessage}
    />)
    
  }, [
    isContentHidden,
    isAzkarTime,
    isSelctedHadeeth,
    selectedHadeeth,
    isPrimaryMessage,
    PrimaryMessage,
    isBigIqama,
    //Hamzah:    
    isShowSilentMessage,
    showSilentMessage,

  ]);

  if (isContentHidden === true) {
    return <div className="mainContainer" >{generalSettings["showSilentMessage"] && <SilentMessageContainer/>} </div>;

  }  
  
  console.log(isShortMessage)
  return (
    
    <div className="mainContainer">
    <div className={isShortMessage ? "ContentContainer-withMessage" : "ContentContainer-withoutMessage"}>
      {currentContent}       
    </div>
      {isShortMessage ? <EhdaaContainer isIhdaa={isIhdaa} shortMessage={shortMessage}/> : null}       
    </div>
    
    
    
  );
};

export default ContentContainer;
