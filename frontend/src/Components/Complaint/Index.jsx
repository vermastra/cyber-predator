import React, {Fragment, useEffect } from "react";
import { useParams } from "react-router";
import './styles.css'
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getReportDetails } from "../../actions/reportAction";
import { useAlert } from "react-alert";
import Loader from "../loader/loader";

function Index() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { report, error,loading } = useSelector((state) => state.reportDetails);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getReportDetails(id));
  }, [dispatch, alert, error, id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="Detailed">
            <div className="user_detailed">
              <h1>Complainer Details</h1>
              <div className="each_com">
                <div className="title_detailed">Name</div>:{" "}
                <div className="val_detailed"></div>
              </div>
              <div className="each_com">
                <div className="title_detailed">Email</div>:{" "}
                <div className="val_detailed"></div>
              </div>
            </div>
            <div className="victim_details">
              <h1>Personal Details</h1>
              {report.length && report.map(function (per) {
                return (
                  <div className="each_com">
                    <div className="title_detailed">{per.name}</div>:{" "}
                    {/* <div className="val_detailed"> {Data[per.val]} </div> */}
                  </div>
                );
              })}
            </div>
            {/* <div className="victim_details">
        <h1>Complaint Details</h1>
        {Complain.map(function (per) {
          return (
            <div className="each_com">
              <div className="title_detailed">{per.title}</div>:{" "}
              <div className="val_detailed"> {Data[per.val]} </div>
            </div>
          );
        })}
      </div> */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Index;
