import React, {useState} from 'react';
import Chatroom from './Chatroom.js';

function ChatModule() {
  const [searchVal, setSearchVal] = useState('');

  return (
    <div className="chat-module row-container flex-grow"> 
      <div style={{display:"none"}} className="chats-list hide-mobile col-container border">
        <input type="text" className="form-control" placeholder="Search" onChange={(event)=>setSearchVal(event.target.value)} value={searchVal} aria-label="Search bar"></input>
        <ul> placeholder list of chats</ul>
      </div>

      <Chatroom />
    </div>
  );
}

export default ChatModule;