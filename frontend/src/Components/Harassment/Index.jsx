import React, { useState, useEffect } from "react";
import { Complain } from "../Complaint_details/input";
import { Personal } from "../Personal/input";
import Foot from "../File_Snippits/Index";
import "./styles.css";
import "../Complaint_details/styles.css";
import "../Personal/styles.css";
import swal from 'sweetalert'
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, createReport, } from "../../actions/reportAction";
import { useNavigate } from "react-router-dom";
import { CREATE_REPORT_RESET } from "../../constants/reportConstants";

function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { error, success } = useSelector((state) => state.newReport);
  const [complaint, setcomplaint] = useState({
    name: "",
    address: "",
    postal: "",
    phone: "",
    email: "",
    type: "Harrasment",
    platform: "",
    subject: "",
    summary: "",
  });
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (error) {
      swal ( "Oops" ,  "Something went wrong!" ,  "error" )
      dispatch(clearErrors());
    }

    if (success) {
      swal ( "Done" ,"Your Report has been successfully Submitted!" ,  "success" )
      navigate("/");
      dispatch({ type: CREATE_REPORT_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  const controluser = (e) => {
    const { name, value } = e.target;
    setcomplaint({ ...complaint, [name]: value });
  };

  const tchanger = (e) => {
    setcomplaint({ ...complaint, type: e.target.value });
  };

  const controlfile = (e) => {
    const files = Array.from(e.target.files);
    setImages([]); 
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    
    myForm.set("name", complaint.name);
    myForm.set("address", complaint.address);
    myForm.set("postal", complaint.postal);
    myForm.set("contactNo", complaint.phone);
    myForm.set("email", complaint.email);
    myForm.set("crimeType", complaint.type);
    myForm.set("platform", complaint.platform);
    myForm.set("subject", complaint.subject);
    myForm.set("discription", complaint.summary);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createReport(myForm));
  };

  return (
    <div>
      <div className="harr">
        <div className="har_head">The Cyber Predator</div>
        <div className="personal">
          <div className="per_head">Personal Details</div>
          <div className="person_details">
            {Personal.map(function (props,index) {
              return (
                <div className="each" key={index}>
                  <div>{props.question}</div>
                  <input
                    type={props.type}
                    name={props.name}
                    required
                    onChange={controluser}
                    key={props.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="complain">
          <div className="per_head">Complain Category</div>
          <div className="complaint_details cr">
            <div className="each">
              <div>Category of Bullying</div>{" "}
              <select name="type" id="crime" onChange={tchanger}>
                <option value="Harrasment">Harrasment</option>
                <option value="Exclusion">Exclusion</option>
                <option value="Cyberstalking">Cyberstalking</option>
                <option value="Fraping">Fraping</option>
                <option value="Doxing">Doxing</option>
              </select>
            </div>
          </div>
        </div>
        <div className="complain">
          <div className="com_head">Complain Details</div>
          <div className="complaint_details">
            {Complain.map(function (props,index) {
              return (
                <div className="each" key={index}>
                  <div>{props.question}</div>
                  <input
                    type={props.type}
                    name={props.name}
                    onChange={controluser}
                    key={props.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="witness_details">
          <div className="com_head">Witness Details</div>
          <div className="complaint_details witness">
            <div className="each">
              <div>Any witness(example: Screenshots)</div>
              <input
                type="file"
                multiple="multiple"
                name="screenshots"
                accept="image/*"
                onChange={controlfile}
              />
            </div>
          </div>
        </div>
        <Foot />
        <button onClick={submit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Index;
