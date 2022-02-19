import React, { useState, useEffect } from "react";
import "./styles.css";
import { Form } from "../Input/signin";
import CountrySelector from "../countryselect";
import { useNavigate } from "react-router";
import { clearErrors, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

export default function Sigin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [user, setuser] = useState({
    name: "",
    email: "",
    role: "user",
    password: "",
  });

  const controluser = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const tchanger = (e) => {
    setuser({ ...user, role: e.target.value });
  };

  const signin_start = async () => {
    const myForm = new FormData();
    myForm.set("name", user.name);
    myForm.set("email", user.email);
    myForm.set("password", user.password);
    myForm.set("role", user.role);
    console.log(user)
    dispatch(register(myForm));
  };

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    if (isAuthenticated) {
      navigate(`/`);
    }
  }, [dispatch, alert, navigate, isAuthenticated]);
  return (
    <div>
      <div className="sign">
        <div className="sign_cont">
          <div className="sign_head">
            <h1>The Cyber Predator</h1>
          </div>
          <div className="sign_form">
            <div className="sign_data">
              {Form.map(function (props, index) {
                return (
                  <>
                    <input
                      type={props.type}
                      name={props.name}
                      placeholder={props.question}
                      onChange={controluser}
                      id={index}
                    />
                  </>
                );
              })}
               {/* <CountrySelector/> */}
              <div className="sign_data">
                <select name="role" className="roles"  onChange={tchanger}>
                  <option value="user">User</option>
                  <option value="Harrasment">Harrasment</option>
                  <option value="Exclusion">Exclusion</option>
                  <option value="Cyberstalking">Cyberstalking</option>
                  <option value="Fraping">Fraping</option>
                  <option value="Doxing">Doxing</option>
                </select>
              </div>
              <button className="btn btn-info" onClick={signin_start}>
                Sign in
              </button>
              <div className="logu">
                Already have an account. <a href="/login">Login here</a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
