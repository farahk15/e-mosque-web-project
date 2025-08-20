import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import myImage from "./silent-logo.png";
import { ApiContext } from "../../../../context/APIContext";

const SilentMessage = ({ content, showImage, SilentMessageStyle }) => {
  return (
    <div className="SilentMessage-item" style={SilentMessageStyle}>
      {showImage ? (
        <img src={myImage} className="SilentMessage-item-img" alt="Silent-logo" />
      ) : (
        <p className="afterHadith_DuringPrayer">{content}</p>
      )}
    </div>
  );
};

export const SilentMessageContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { userStyles, language } = useContext(ApiContext);

  const [isEng, setIsEng] = useState(language["SelectedLanguage"]);

  const SilentMessageStyle = {
    color: userStyles.SilentMessageColor,
  };

  let SilentMessageData = [
    <h1 id="afterHadith_DuringPrayerHeader"> حول هاتفك للصامت <br /> تلقائيا باستخدام <br /> تطبيق المسجد الذكي <br /> emosque </h1>,
    <span> Silent-logo </span>,
  ];

  if (language["SelectedLanguage"] === "en") {
    SilentMessageData = [
      <h1 id="afterHadith_DuringPrayerHeader"> Turn your phone to silent <br /> automatically using <br /> the smart mosque app <br /> emosque </h1>,
      <span> Silent-logo </span>,
    ];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SilentMessageData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="SilentMessageContainer">
      <SilentMessage SilentMessageStyle={SilentMessageStyle} content={SilentMessageData[currentIndex]} showImage={currentIndex === 1} />
    </div>
  );
};
