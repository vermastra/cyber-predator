import {
  CREATE_REPORT_REQUEST,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAIL,
  CREATE_REPORT_RESET,
  ALL_REPORTS_REQUEST,
  ALL_REPORTS_SUCCESS,
  ALL_REPORTS_FAIL,
  UPDATE_REPORT_REQUEST,
  UPDATE_REPORT_SUCCESS,
  UPDATE_REPORT_FAIL,
  UPDATE_REPORT_RESET,
  REPORT_DETAILS_REQUEST,
  REPORT_DETAILS_SUCCESS,
  REPORT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/reportConstants";

export const newReportReducer = (state = { }, action) => {
  switch (action.type) {
    case CREATE_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_REPORT_SUCCESS:
      return {
        loading: false,
        report: action.payload.report,
        success: action.payload.success,
      };

    case CREATE_REPORT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CREATE_REPORT_RESET:
      return {
        ...state,
        success: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const allReportsReducer = (state = { reports: [] }, action) => {
  switch (action.type) {
    case ALL_REPORTS_REQUEST:
      return {
        loading: true,
      };

    case ALL_REPORTS_SUCCESS:
      return {
        loading: false,
        reports: action.payload,
      };

    case ALL_REPORTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const reportReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_REPORT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_REPORT_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const reportDetailsReducer = (state = { report: {} }, action) => {
  switch (action.type) {
    case REPORT_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case REPORT_DETAILS_SUCCESS:
      return {
        loading: false,
        report: action.payload,
      };

    case REPORT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};