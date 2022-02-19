import io from 'socket.io-client'
import { useRef, useState, useEffect } from 'react';
import immer from 'immer';
import Cjat from './Comp/Chat';
import Form from './Comp/Form';

const initialMessagesState = {
  General:[],Exclusion:[],Harrasment:[],Cyberstalking:[],Fraping:[],Outdoxing:[],Other:[]
}

function Index() {
  const [username, setusername] = useState("Hannan")
  const [connected, setconnected] = useState(false)
  const [currentChat, setcurrentChat] = useState({
    isChannel: true, chatName: "General", receiverId: ""
  })
  const [allUsers, setallUsers] = useState([])
  const [messages, setMessages] = useState(initialMessagesState)
  const [message, setmessage] = useState("")
  const [connectedRooms, setconnectedRooms] = useState(["General"]);
  const socketRef = useRef();

  function handleMessageChange(e) {
    setmessage(e.target.value);
  };

  function handleChange(e) {
    setusername(e.target.value);
  }

  useEffect(() => {
    setmessage("");
  }, [messages]);


  function sendMessage() {
    const payload = {
      content: message,
      to: currentChat.isChannel ? currentChat.chatName : currentChat.receiverId,
      sender: username,
      chatName: currentChat.chatName,
      isChannel: currentChat.isChannel
    };
    socketRef.current.emit("send message", payload);
    const newMessages = immer(messages, draft => {
      draft[currentChat.chatName].push({
        sender: username, content: message
      })
    });
    setMessages(newMessages);
  }

  function roomJoinCallback(incomingMessages, room) {
    const newMessages = immer(messages, draft => {
      draft[room] = incomingMessages;
    });
    setMessages(newMessages);
  }

  function joinRoom(room) {
    const newConnectedRooms = immer(connectedRooms, draft => {
      draft.push(room);
    });
    socketRef.current.emit("join room", room, (messages) => roomJoinCallback(messages, room));
    setconnectedRooms(newConnectedRooms);
  }

  function toogleChat(currentChat) {
    if (!messages[currentChat.chatName]) {
      const newMessages = immer(messages, draft => {
        draft[currentChat.chatName] = [];
      });
      setMessages(newMessages);
    }
    setcurrentChat(currentChat);
  }

  function connect() {
    setconnected(true);
    console.log(connected);
    socketRef.current = io.connect('/');
    socketRef.current.emit("join server", username)
    socketRef.current.emit("join room", "General", (messages) => roomJoinCallback(messages, "General"));
    socketRef.current.on("new user", all => {
      setallUsers(all);
    });
    socketRef.current.on("new message", ({ content, sender, chatName }) => {
      setMessages(messages => {
        const newMessages = immer(messages, draft => {
          if (draft[chatName]) {
            draft[chatName].push({ content, sender });
          } else {
            draft[chatName] = [{ content, sender }];
          }
        });
        return newMessages;
      })
    })
  }
  useEffect(() => {
    connect();
    console.log(username);
  }, [])
  
  let body;
  if (connected) {
    body = (
      <Cjat
        message={message}
        handleMessageChange={handleMessageChange}
        sendMessage={sendMessage}
        yourId={socketRef.current ? socketRef.current.id : ""}
        allUsers={allUsers}
        joinRoom={joinRoom}
        connectedRooms={connectedRooms}
        currentChat={currentChat}
        toggleChat={toogleChat}
        messages={messages[currentChat.chatName]}
      />
    );
  } else {
    body = (
      <Form username={username} onChange={handleChange} connect={connect} />
    )
  }
  return (
    <div className="App">
      {body}
    </div>
  );
}

export default Index;