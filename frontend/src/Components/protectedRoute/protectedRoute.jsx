import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    return (
        <Fragment>
            {loading === false && (
                (isAuthenticated === false || (isAdmin === true && user.role === "user")) ? <Navigate to="/login" /> : <Outlet />
            )}
        </Fragment>
    );
};

export default ProtectedRoute;