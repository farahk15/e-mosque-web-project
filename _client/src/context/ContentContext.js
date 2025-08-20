// TimerContext.js
import React, { createContext, useState, useEffect } from "react";

const ContentContext = createContext();

const ContentProvider = ({ children }) => {
  const [isAzkarTime, setIsAzkarTime] = useState(false);
 
  const [isSelctedHadeeth, setIsSelctedHadeeth] = useState(false);
  const [selectedHadeeth, setSelectedHadeeth] = useState("");

  const [isPrimaryMessage, setIsPrimaryMessage] = useState(false);
  const [PrimaryMessage, setPrimaryMessage] = useState("");

  const [isShortMessage, setIsShortMessage] = useState(false);
  const [isIhdaa, setIsIhdaa] = useState(false);
  const [shortMessage, setShortMessage] = useState("");

  const [isBigIqama,setIsBigIqama] = useState(false)

  const [isContentHidden, setIsHidden] = useState(true);
  
  //hamzah:  
  const [isShowSilentMessage, setIsShowSilentMessage] = useState(false);

  return (
    <ContentContext.Provider
      value={{
        isContentHidden,
        setIsHidden,
        isAzkarTime,
        setIsAzkarTime,
        isSelctedHadeeth,
        setIsSelctedHadeeth,
        selectedHadeeth,
        setSelectedHadeeth,
        isPrimaryMessage,
        setIsPrimaryMessage,
        PrimaryMessage,
        setPrimaryMessage,
        isBigIqama,setIsBigIqama,
        shortMessage, setShortMessage,
        isIhdaa, setIsIhdaa,
        isShortMessage, setIsShortMessage,
        //Hamzah:
        isShowSilentMessage,setIsShowSilentMessage,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentContext, ContentProvider };
