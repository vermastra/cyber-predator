import './App.css';
import { useEffect } from "react";
import store from "./store";
import { loadUser } from "./actions/userAction";
import ProtectedRoute from "./Components/protectedRoute/protectedRoute";
import Home from './Components/Homepage/Index';
import { useSelector } from "react-redux";
import Sigin from './Components/Signin/Sigin';
import Login from './Components/Login/Login';
import Complain from './Components/Harassment/Index'
import Crime from './Components/Crime/Crime'
import Chat from './Components/Chat/Index';
import Navbar from './Components/Navbar/Navbar';
import Info from './Components/Info/Info';
import Report from './Components/Report_t&c/T&C.js';
import Rules from './Components/Rules/Index';
import { getAllReports } from './actions/reportAction';
import Data from './Components/Reciever/Data';
import List from './Components/Complaint/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  if(isAuthenticated&&user.role!=="user")
      store.dispatch(getAllReports());

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/info' element={<Info />} />

        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signin' element={<Sigin />} />
        <Route exact path='/rules' element={<Rules />} />
        <Route exact path='/crime' element={<Crime />} />

        {/* <Route exact path="/chat" element={<ProtectedRoute />} >
          <Route exact path='/chat' element={<Chat />} />
        </Route> */}
        <Route exact path='/chat' element={<Chat />} />

        <Route exact path="/report/new" element={<ProtectedRoute />} >
          <Route exact path='/report/new' element={<Complain />} />
        </Route>

        <Route isAdmin={true} exact path="/reports" element={<ProtectedRoute />} >
          <Route exact path='/reports' element={<Data />} />
        </Route>

        <Route isAdmin={true} exact path="/response_data/:id" element={<ProtectedRoute />} >
          <Route exact path='/response_data/:id' element={<List />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;