import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon
} from "@ionic/react";

import {chevronBackOutline,chevronForwardOutline} from 'ionicons/icons';
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import ChatApp from "../components/ChatApp";
import Calendar_Box from "../components/Calendar_Box";
import { useState } from "react";

const Home: React.FC = () => {
  const today = new Date();
  console.log(today);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-based index for months

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleMonthChange = (direction:number) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // console.log(Date().split(' ')[1]);

  const handleYearChange = (direction: number) => {
    setCurrentYear(currentYear + direction);
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>S.A.M</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          <IonCard
            style={{ width: "250px", display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex",border:"1px solid white", alignItems:"center", justifyContent:"space-between",minWidth:"200px" }}>
            <IonIcon className="chevron" size="large" onClick={() => handleYearChange(-1)} icon={chevronBackOutline}></IonIcon>
            
              <h3>{currentYear}</h3>
              <IonIcon className="chevron" size="large" onClick={() => handleYearChange(1)} icon={chevronForwardOutline}></IonIcon>
            
            </div>
            <div style={{ display: "flex",border:"1px solid white", alignItems:"center", justifyContent:"space-between",minWidth:"200px" }}>
            <IonIcon className="chevron" size="large" onClick={() => handleMonthChange(-1)} icon={chevronBackOutline}></IonIcon>
            
              <h3>{months[currentMonth]}</h3>
              <IonIcon className="chevron" size="large" onClick={() => handleMonthChange(1)} icon={chevronForwardOutline}></IonIcon>
            
            </div>
          </IonCard>
        </div>

        <div className="calendar">
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isToday =
              day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear();

            const style = {
              border: isToday ? "5px solid green" : "",
            };

            return <Calendar_Box key={index} dayNum={index} style={style} />;
          })}
        </div>
        {/* <ExploreContainer /> */}
        {/* <ChatApp/> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
