import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isUserAuthenticated } from "../../guards/auth-guard";

const ProtectedRoute = ({ redirectRoute }) => {
  const auth = isUserAuthenticated();

  return auth ? <Outlet /> : <Navigate replace to={redirectRoute} />;
};

// function isValidSuperAdminRoute(route, routeFields) {
//   for (let value of routeFields) {
//     if (value === route) {
//       return true;
//     }
//   }
//   return false;
// }

// const RouteValidation = ({ redirectRoute }) => {
//   const [getUserType] = useGetUserType();

//   if (
//     getUserType === "SuperAdmin" &&
//     isValidSuperAdminRoute(redirectRoute, SUPER_ADMIN_ROUTES)
//   ) {
//     return <Navigate replace to={redirectRoute} />;
//   } else if (
//     getUserType === "Admin" &&
//     isValidSuperAdminRoute(redirectRoute, ADMIN_ROUTES)
//   ) {
//     return <Navigate replace to={redirectRoute} />;
//   } else if (
//     getUserType === "Teacher" &&
//     isValidSuperAdminRoute(redirectRoute, TEACHER_ROUTES)
//   ) {
//     return <Navigate replace to={redirectRoute} />;
//   } else if (
//     getUserType === "Student" &&
//     isValidSuperAdminRoute(redirectRoute, STUDENT_ROUTES)
//   ) {
//     return <Navigate replace to={redirectRoute} />;
//   } else {
//     return <Navigate replace to="/dashboard" />;
//   }
// };

export default ProtectedRoute;
