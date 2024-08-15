import React, { useState } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonFooter
} from '@ionic/react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim()) {
      // Add user message to the messages list
      const userMessage: Message = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Simulate bot response
      setTimeout(() => {
        const botMessage: Message = { text: `Bot response to: ${input}`, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 500);

      // Clear input field
      setInput('');
    }
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AI Chat App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {messages.map((message, index) => (
            <IonItem key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
              <IonLabel>{message.text}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonInput
            value={input}
            placeholder="Type a message..."
            onIonChange={e => setInput(e.detail.value!)}
          />
          <IonButton onClick={handleSend}>Send</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  );
};

export default ChatApp;
