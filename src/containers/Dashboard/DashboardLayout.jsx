import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "../../components/routes/ProtectedRoute";
import DashboardPage from "../../pages/protected/DashboardPage";
import MediaQueueViewer from "../MediaQueueViewer";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { ROUTES } from "../../config/routes-config";
import { useSelector } from "react-redux";
import CreateSchedule from "../../pages/protected/CreateSchedule";
import CreateNotice from "../../pages/protected/CreateNotice";
import ViewSchool from "../../pages/protected/ViewSchool";
import ViewDetailsTeacher from "../../pages/protected/ViewDetailsTeacher";
import ViewDetailsStudent from "../../pages/protected/ViewDetailsStudent";

const DashboardLayout = () => {
  const [isShow, setIsShow] = useState(false);
  const { loginType, isSuperAdmin } = useSelector(
    (state) => state?.userCredential?.user || {}
  );
  const routeKey = isSuperAdmin ? "superAdmin" : loginType;

  return (
    <>
      <div className="mainWrapper">
        <DashboardSidebar isShow={isShow} setIsShow={setIsShow} />
        <DashboardHeader isShow={isShow} setIsShow={setIsShow} />
        <div className="innerWrapper">
          <Routes>
            <Route
              path=""
              element={<ProtectedRoute redirectRoute={"/login"} />}
            >
              <Route exact path="/dashboard" element={<DashboardPage />} />
              {ROUTES?.[routeKey]?.map((curr) => {
                return <Route exact path={curr.route} element={curr.element} />;
              })}
              <Route path="/notice/createnotice" element={<CreateNotice />} />
            </Route>
            <Route
              path="/schedule/createschedule"
              element={<CreateSchedule />}
            />
            <Route path="/school/:id" element={<ViewSchool />} />
            <Route path="/teacher/:id" element={<ViewDetailsTeacher />} />
            <Route path="/student/:id" element={<ViewDetailsStudent />} />
            <Route path="*" element={<Navigate replace to="/dashboard" />} />
          </Routes>

          <MediaQueueViewer />
        </div>

        <DashboardFooter />
      </div>
    </>
  );
};

export default DashboardLayout;
