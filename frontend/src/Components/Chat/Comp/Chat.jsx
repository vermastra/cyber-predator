import React from "react";
import styled from "styled-components";
import "../styles.css";
import ScrollToBottom from "react-scroll-to-bottom";

const rooms = [
  "General",
  "Exclusion",
  "Harrasment",
  "Cyberstalking",
  "Fraping",
  "Outdoxing",
  "Other",
];
function Cjat(props) {
  function renderRooms(room) {
    const currentChat = {
      chatName: room,
      isChannel: true,
      recieverId: "",
    };
    return (
      <div
        className="row"
        onClick={() => props.toggleChat(currentChat)}
        key={room}
      >
        {room}
      </div>
    );
  }
  function renderUser(user) {
    // console.log(user)
    // console.log("eirubgiauebgr");
    if (user.id === props.yourId) {
      return <Row key={user.id}>You:{user.username}</Row>;
    }
    const currentChat = {
      chatName: user.username,
      isChannel: false,
      recieverId: user.id,
    };
    return (
      <Row
        onClick={() => {
          props.toggleChat(currentChat);
        }}
        key={user.id}
      >
        {user.username}
      </Row>
    );
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      props.sendMessage();
    }
  }
  function renderMessages(message, index) {
    return (
      <div className="each_msg" key={index}>
        <h6>{message.sender}</h6>
        <p>{message.content}</p>
      </div>
    );
  }

  let body;
  if (
    !props.currentChat.isChannel ||
    props.connectedRooms.includes(props.currentChat.chatName)
  ) {
    body = <div className="messages">{props.messages.map(renderMessages)}</div>;
  } else {
    body = (
      <button onClick={() => props.joinRoom(props.currentChat.chatName)}>
        Join {props.currentChat.chatName}
      </button>
    );
  }
  return (
    <div className="container_chat">
      <div className="sidebar">
        <h3>Channels</h3>
        {rooms.map(renderRooms)}
        {/* <h3>All Users</h3>
            {props.allUsers.map(renderUser)}; */}
      </div>
      <div className="ChatPanel">
        <div className="ChannelInfo">{props.currentChat.chatName}</div>
        <ScrollToBottom className="BodyContainer">{body}</ScrollToBottom>
        <div className="msg_area">
          <textarea
            className="textbox"
            value={props.message}
            onChange={props.handleMessageChange}
            onKeyPress={handleKeyPress}
            placeholder="Hey..."
          />
          {/* <div className="send_s">&#9658;</div> */}
        </div>
      </div>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const SideBar = styled.div`
  height: 100%;
  width: 15%;
  border-right: 1px solid black;
`;

const ChatPanel = styled.div`
  height: 100;
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 75%;
  overflow: scroll;
  border-bottom: 1px solid black;
`;

const TextBox = styled.textarea`
  height: 15%;
  width: 100%;
`;

const ChannelInfo = styled.div`
  height: 10%;
  width: 100%;
  border-bottom: 1px solid black;
`;

const Row = styled.div`
  cursor: pointer;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default Cjat;
