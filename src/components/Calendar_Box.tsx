import {
  IonCard,
  IonCardHeader,
  IonTitle,
} from "@ionic/react";

import "./Calendar_box.css"


function Calendar_Box({dayNum,style}:{dayNum:number,style:React.CSSProperties}) {
  return (
    <IonCard 
    style={style}
    >
      <IonCardHeader>
        <IonTitle>{dayNum+1}</IonTitle>
      </IonCardHeader>
    </IonCard>
  );
}

export default Calendar_Box;
