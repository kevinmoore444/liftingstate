import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import MessageHistory from './components/MessageHistory';
    
    
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  const [messageHistory, setMessageHistory] = useState([])


  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
      setMessageHistory([...messageHistory, newMessage])
  }





  
  return (
      <>
          <MessageForm onNewMessage={ youveGotMail } />
          <MessageDisplay message={ currentMsg } />
          <MessageHistory messageHistory= {messageHistory}/>
      </>
  );
}
    
export default App;
