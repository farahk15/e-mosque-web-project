
import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import { ApiContext } from "../../../../context/APIContext";
import myImage from "./qursi.png";

const Azkar = ({ content, showImage , AzkarStyle }) => {
  return (
    <div className="azkar-item" style={AzkarStyle}>
      {(
        showImage && 
        <img src={myImage} className="azkar-item-img" alt="اية الكرسي" />
      ) ||
      <p className="afterPrayerEl">{content}</p>
    }
    </div>
  );
};

export const AzkarContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const { userStyles,language } = useContext(ApiContext);      

    const AzkarStyle = {
      color: userStyles.AzkarColor };

    const azkarData = [
        <h1 id="afterPrayerHeader">الأذكار بعد الصلاة المفروضة</h1>,
        <span>استغفر الله&nbsp;&nbsp;&nbsp;استغفر الله&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;استغفر الله</span>,
        <span>اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والاكرام</span>,
        <span>لا اله الا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير</span>,
        <span>لاحول ولا قوة الا بالله،لا اله الا الله ولا نعبد الا اياه، له النعمة وله الفضل وله الثناء الحسن</span>,
        <span>لا اله الا الله<br/><br/>مخلصين له الدين ولو كره المشركون</span>,
        <span>اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجد، اللهم اعني على ذكرك وشكرك وحسن عبادتك</span>,
        <span>لا اله الا الله وحده لا شريك له، له الملك وله الحمد، يحيي ويميت وهو على كل شيء قدير</span>,
        <span>الله أكبر<sub className="subElement1">33 مرة</sub> &nbsp;&nbsp;&nbsp;الحمد لله<sub className="subElement1">33 مرة</sub>&nbsp;&nbsp;&nbsp;سبحان الله<sub className="subElement1">33 مرة</sub></span>,
        <span>لا اله الا الله وحده لا شريك له، له الملك وله الحمد،وهو على كل شيء قدير<sub className="subElement1">مرة واحدة</sub></span>,
        <span>آية الكرسي</span>
      ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % azkarData.length);
      }, 5500);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="AzkarContainaer">
 

      <Azkar AzkarStyle={AzkarStyle} content={azkarData[currentIndex]} showImage={currentIndex === 10} />
    </div>
    );
}
