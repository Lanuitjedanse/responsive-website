import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import SurveyInfo from "./SurveyInfo";
import Button from "./Button";
import ContentImgBox from "./ContentImgBox";
import ListAdvantages from "./ListAdvantages";
import ContactModal from "./ContactModal";
import Reviews from "./Reviews";
import Footer from "./Footer";

import { useState } from "react";
import BoxCertificates from "./BoxCertifcates";
import Steps from "./Steps";

function App() {
  const [toggleBox, setToggleBox] = useState(false);
  const toggleQuestionnaire = () => {
    setToggleBox(!toggleBox);
  };
  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden">
      <Header />
      <Banner
        toggleQuestionnaire={toggleQuestionnaire}
        bannerImg="/background-banner.png"
        height="h-100"
      >
        <BoxCertificates toggleQuestionnaire={toggleQuestionnaire} />
      </Banner>
      <SurveyInfo />
      <ContentImgBox
        img={"/content-img-box1.png"}
        firstParagraph={`10 Millionen Menschen leiden in Deutschland unter Hörverlust. 
        Meist erfolgt dieser schleichend und erschwert es Betroffenen die Anzeichen rechtzeitig zu erkennen und zeitnah zu handeln. 
        Unbehandelt leiden oft Beziehungen, Gesundheit und Karriere.`}
        secondParagraph={`Der Schritt zur ersten Hörhilfe ist zweifellos ein Großer. Menschen mit Hörminderung zögern oft Jahre, 
        bevor Sie sich für ein Hörgerät entscheiden. Dabei sagen 82 Prozent, dass die Erwartungen, die Sie an Ihr Hörgerät hatten, übertroffen wurden.`}
        thirdParagraph={`Zwei von drei Hörgerätenutzern bereuen sogar nicht eher den Schritt zur Hörhilfe gewagt zu haben.`}
        orientation="left"
      />
      <div className="self-center mt-10 mb-10 ">
        <Button toggleQuestionnaire={toggleQuestionnaire}>
          Hörgeräte unverbindlich Probetragen
        </Button>
      </div>
      <ContentImgBox
        img={"/content-img-box2.png"}
        firstParagraph={`Bei GEERS steht der Mensch im Mittelpunkt. Seit 70 Jahren begleiten wir Menschen mit Hörminderung auf dem Weg zum „Wiederhören“.`}
        secondParagraph={`In Deutschland sind wir mit über 740 Fachgeschäften Marktführer - kein anderes Hörakustik-Unternehmen ist in Deutschland so gut vertreten.`}
        thirdParagraph={`Wir garantieren höchste Qualität, Zufriedenheit und Service.`}
        orientation="right"
      />
      <ListAdvantages toggleQuestionnaire={toggleQuestionnaire} />
      <Reviews />
      <Steps />
      <Banner
        toggleQuestionnaire={toggleQuestionnaire}
        bannerImg="/banner2.png"
        height="h-80"
      ></Banner>
      <Footer />
      {toggleBox && (
        <ContactModal
          toggleQuestionnaire={toggleQuestionnaire}
          toggleBox={toggleBox}
        />
      )}
    </div>
  );
}

export default App;
