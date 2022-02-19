import React from "react";
import "./index.css";
import Img1 from '../../Images/Img1.jpg'

function Index() {
  return (
    <div className="body">
      <div className="home">
        
        <div className="h_head">
          <h1 className="h_title"> CYBER PREDATOR</h1>
          <img className="pic" src={Img1} alt="" />
          <h4 className="mini_h">Bullying is very common and is exercised widely be it online or offline. People need to understand that online harassment do have an offline impact , SO we have come together to help in discouragement of the bullying online and offline. if you are facing any kind of cyber bullying , complain today!! raise your voice!!</h4>
        </div>
        <div className="cardc">
          <div className="rep">
            <a href='/crime' className="report">Report a Crime</a>
          </div>
          <div className="convo">
            <a href='/chat' className="report">Join a coversation</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
