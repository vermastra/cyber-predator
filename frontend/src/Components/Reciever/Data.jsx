import React, { Fragment, useState, useEffect } from "react";
// import { Details } from "./Input";
// import Index from "../Complaint/Index";
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";
import Loader from "../loader/loader";
import { Link } from "react-router-dom";
import "./style.css"
function Data() {
  const Navigate = useNavigate();
  const [curr_status, set_curr_status] = useState("Active");

  const { reports, loading } = useSelector((state) => state.allReports);
  const tchanger = (e) => {
    set_curr_status(e.target.value);
  };

  useEffect(() => {
  }, [curr_status]);

  const view = (e) => {
    // <Index det={props.target.det}/>
    let id = e.target.id;
    Navigate(`/response_data/${id}`)

  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <div className="search">
              <h5>Case Status</h5>
              <select name="type" id="surr_status" onChange={tchanger}>
                <option value="Active">Active</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            {reports && reports.map(function (props, idx) {
              if (props.status === curr_status) {
                return (
                  <div>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${idx}`}
                            aria-expanded="true"
                            aria-controls={`collapse${idx}`}
                          >
                            {props.subject}

                          </button>
                        </h2>
                        <div
                          id={`collapse${idx}`}
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div>
                              <strong> {props.crimeType} </strong> <br />
                              <span style={{ "color": "blue" }}>Status: </span> {props.status}
                              <div className="discrip">
                                <span style={{ "color": "blue" }}>Discription: </span> {props.discription}
                              </div>
                              <Link to={`/response_data/${props._id}`}>
                                <button
                                  className="btn btn-primary"
                                // id={props._id}
                                // onClick={view}
                                >
                                  View Details
                                </button>
                              </Link>
                            </div>
                            <div>
                              <img src={props.images[0].url} alt="img" className="view" />
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return undefined;
            })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Data;
