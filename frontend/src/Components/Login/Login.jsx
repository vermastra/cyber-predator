import React, { useState, useEffect } from "react";
import './styles.css'
import { Form } from "../Input/login";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { clearErrors, login } from "../../actions/userAction";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [user, setuser] = useState({
    email: "", password: ""
  });

  const { isAuthenticated } = useSelector(
    (state) => state.user
  );
  const controluser = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  }
  const log_start = async (e) => {
    const { email, password } = user;
    e.preventDefault();
    dispatch(login(email, password));
  }
  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   console.log(error);
    //   dispatch(clearErrors());
    // }

    if (isAuthenticated) {
      navigate(`/`);
    }
  }, [dispatch, alert, navigate, isAuthenticated]);

  return (
    <div>
      <div className="log">
        <div className="log_cont">
          <div className="log_head">
            <h1>CYBER PREDATOR</h1>
          </div>
          <div className="log_form">
            <div className="log_data">
              {Form.map(function (props) {
                return (
                  <>
                    <input
                      type={props.type}
                      name={props.name}
                      placeholder={props.question}
                      onChange={controluser}
                      id={props.id}
                    />
                  </>
                );
              })}

              <div className="check_box">
                <input type="checkbox" /><div>Remember Me</div>
              </div>

              <button className="btn btn-info" onClick={log_start} >Log in</button>
              <div className="logu">Don't have an account. <a href='/signin'>Sign-in here</a> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
