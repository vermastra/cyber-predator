import React from 'react' ;
import './T&C.css';


function Terms(props){
    return( props.trigger)?(
        <div className='popup'>
            <div className='popup_inside'>
                <br></br>
                <button className='acceptBtn' onClick={()=>props.setTrigger(false)}>Accept</button>
             {props.children}
            </div>
        </div>
    ) :"" ;
} 

export default Terms;