import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
// import { Redirect, Route } from "react-router-dom";
import { Navigate, Route, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest}) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);


  return (
    <Fragment>
        {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Navigate to="/login" />;
            // return redirect("/login");
            }

            // if (isAdmin === true && user.role !== "admin") {
            //   return <Redirect to="/login" />;
            // }

            // return <Component {...props} />;
            return <Outlet {...props}/>;
          }}
        />
      )}
    </Fragment>
    
  )
}

export default ProtectedRoute