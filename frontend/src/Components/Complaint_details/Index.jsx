// import React,{useState} from 'react';
import './styles.css'

function Index({update}) {
    
  return <div className='complain'>
      <div className="com_head">Complain Details</div>
      <div className="complaint_details">
          <div className="each">
              <div>Category of Bullying</div> <select name="" id="">
                  <option value="Harrasment">Harrasment</option>
                  <option value="Exclusion">Exclusion</option>
                  <option value="Harrasment">Harrasment</option>
                  <option value="Harrasment">Harrasment</option>
                  <option value="Harrasment">Harrasment</option>
              </select>
          </div>
          <div className="each">
              <div>Date of incident(if relevent)</div><input type="text" name="date" onChange={(e)=>{update(e.tar)}}/>
          </div>
          <div className="each">
              <div>Platform(if relevent)</div><input type="text" name='platform' onChange={controluser}/>
          </div>
          <div className="each">
              <div>Subject</div><input type="text" name='subject' onChange={controluser}/>
          </div>
          <div className="each">
              <div>Summary of Incident</div><input type="text" name='summary'onChange={controluser}/>
          </div>
      </div>
  </div>;
}

export default Index;
