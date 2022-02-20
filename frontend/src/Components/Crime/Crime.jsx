import React from "react";
import "./styles.css";
import "../Report_t&c/T&C";
import { useState } from "react";
import Terms from "../Report_t&c/T&C";

const App = (props) => {
  const [buttonpopup, setButtonPopup] = useState(false);
  return (
    <div className="crimeStart">
      <div className="crimeLeft">
        <h1>Report A Crime</h1>
        <p>
          Crimes against the homeless are indeed one of the burning issues
          today, which everyone seems to ignore. Let us now unite to help them
          by reporting any kind of ill activity done against them.
        </p>
        <div className="crimeButton">
          <a href="/report/new" onClick={() => setButtonPopup(true)}>
            File A Complaint
          </a>
          <Terms trigger={buttonpopup} setTrigger={setButtonPopup}>
            <h1>*T&C</h1>
          </Terms>
        </div>
        <br></br>
        <a href="https://indianexpress.com/article/india/india-news-india/pune-homeless-are-victims-of-a-vicious-cycle-of-crimes/">
          Learn More
        </a>
      </div>
      <div className="crimeRight">
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/1640108019-Ent-MasterCyberSecurity.jpeg?auto=webp&quality=95&crop=16:9&width=675"
          alt="crimePic"
        />
      </div>
    </div>
  );
};
export default App;
