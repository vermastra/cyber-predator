import React from 'react';
import './styles.css'

function Index({complaint,setcomplaint}) {
    const [first, setfirst] = useState(complaint);
    
    const controluser=(e)=>{
        const{name,value}=e.target;
        setfirst({...first,[name]:value});
        setcomplaint(first);
        console.log(e.target.name);
      }
  return <div className='personal'>
      <div className="per_head">
          Personal Details
      </div>
      <div className="person_details">
              <div className="each">
                  <div>Name of person making complaint</div><input type="text" name="name" id="" onChange={controluser} />
              </div>
              <div className="each">
                  <div>Residental Address</div><input type="text" name="address" id="" onChange={controluser}/>
              </div>
              <div className="each">
                  <div>Postal Address</div><input type="text" name="postal" id="" onChange={controluser}/>
              </div>
              <div className="each">
                  <div>Contact Number</div><input type="text" name="phone" id="" onChange={controluser}/>
              </div>
              <div className="each">
                  <div>Email</div><input type="text" name="email" id="" onChange={controluser} />
              </div>
          </div>
  </div>;
}

export default Index;
