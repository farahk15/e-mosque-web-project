import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import { ContentContext } from "../../../../context/ContentContext";
import { SilentMessageContainer } from "../SilentSection/SilentMessage";
import { ApiContext } from "../../../../context/APIContext";

export const ScrollableContainer = ({
  isSelctedHadeeth,
  selectedHadeeth,
  isPrimaryMessage,
  PrimaryMessage,
}) => {
  const containerRef = useRef(null);
  const scrollSpeed = 40; // Adjust the scrolling speed as needed (higher values = faster scrolling)

  //Hazmah:
  const { isShortMessage } = useContext(ContentContext);
  const { generalSettings, language, userStyles } = useContext(ApiContext);
  const [isSilentMessageVisible, setIsSilentMessageVisible] = useState(generalSettings["showSilentMessage"]);
  const [showScrollableContent, setShowScrollableContent] = useState(true);
  useEffect(() => {
  const container = containerRef.current;
  const scrollHeight = container.scrollHeight * 1.5;
  const clientHeight = container.clientHeight;
  const delay = 3000;

  const animationDuration = (scrollHeight / scrollSpeed) * 1200 + delay;

  const keyframes = [
    { transform: "translateY(0)" },
    { transform: `translateY(-${scrollHeight}px)` },
  ];

  const options = {
    duration: animationDuration,
    iterations: 1,
    delay, // Add a 3-second delay at the beginning
  };

  const animation = container.animate(keyframes, options);

  animation.onfinish = () => {
    animation.cancel();
    animation.play();
  };

  return () => animation.cancel();
}, []);

  //Hamzah:
  useEffect(() => {
    let intervalId;

    if (isSilentMessageVisible) {
      intervalId = setInterval(() => {
        setShowScrollableContent((prev) => !prev);
      }, 20000); // Toggle every 6 second (1000 milliseconds)
    }

    return () => {
      // Clear the interval when the component unmounts or isSilentMessageVisible changes
      clearInterval(intervalId);
    };
  }, [isSilentMessageVisible]);
  

   return (
    <div className={(isShortMessage ? "ContentContainer-withMessage" : "ContentContainer-withoutMessage") + " scrollable-container"}>
      {isSilentMessageVisible ? (
        <>
          {showScrollableContent ? (
            <div className="scrollable-wrapper">
            <div className="scrollable-content" ref={containerRef}>              
            <p className="startOfHadeeth">{language["SelectedLanguage"] === "ar" ? "حديث شريف" : "Holy Hadeeth"}</p>
              <p style={{ color: userStyles.HadeethColor }} className="scrollable-paragraph">
                {/* Your long paragraph content goes here */}                
                {(isSelctedHadeeth && selectedHadeeth) ||
                  (isPrimaryMessage && PrimaryMessage) ||
                  (selectedHadeeth)}
              </p>
              <p className="endOfHadeeth "><br/>{language["SelectedLanguage"] === "ar" ? "صدق رسول الله" : ""}</p>
            </div>
            </div>
          ) : (
            <SilentMessageContainer />
          )}
          
        </>
      ) : (
        <div className="scrollable-content" ref={containerRef}>
          <p className="startOfHadeeth">{language["SelectedLanguage"] === "ar" ? "حديث شريف" : "Holy Hadeeth"}</p>
          <p style={{ color: userStyles.HadeethColor }} className="scrollable-paragraph">
            {/* Your long paragraph content goes here */}
            {(isSelctedHadeeth && selectedHadeeth) ||
              (isPrimaryMessage && PrimaryMessage) ||
              (selectedHadeeth)}
          </p>
          <p className="endOfHadeeth "><br/>{language["SelectedLanguage"] === "ar" ? "صدق رسول الله" : ""}</p>
        </div>
      )}
    </div>
  );
};


