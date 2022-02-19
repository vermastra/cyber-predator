import {
    CREATE_REPORT_REQUEST,
    CREATE_REPORT_SUCCESS,
    CREATE_REPORT_FAIL,
    ALL_REPORTS_REQUEST,
    ALL_REPORTS_SUCCESS,
    ALL_REPORTS_FAIL,
    UPDATE_REPORT_REQUEST,
    UPDATE_REPORT_SUCCESS,
    UPDATE_REPORT_FAIL,
    REPORT_DETAILS_REQUEST,
    REPORT_DETAILS_SUCCESS,
    REPORT_DETAILS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/reportConstants";
  
  import axios from "axios";
  
  // Create report
  export const createReport = (report) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_REPORT_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/v1/report/new", report, config);

      dispatch({ type: CREATE_REPORT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_REPORT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
  // Get All reports (admin)
  export const getAllReports = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_REPORTS_REQUEST });
  
      const { data } = await axios.get("/api/v1/reports");
  
      dispatch({ type: ALL_REPORTS_SUCCESS, payload: data.reports });
    } catch (error) {
      dispatch({
        type: ALL_REPORTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Update report
  export const updateReport = (id, report) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_REPORT_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/v1/report/${id}`,
        report,
        config
      );
  
      dispatch({ type: UPDATE_REPORT_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_REPORT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
  // Get report Details
  export const getReportDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: REPORT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/report/${id}`);
  
      dispatch({ type: REPORT_DETAILS_SUCCESS, payload: data.report });
    } catch (error) {
      dispatch({
        type: REPORT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };