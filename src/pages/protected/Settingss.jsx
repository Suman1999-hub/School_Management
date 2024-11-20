// Settings.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TabContent, TabPane } from "reactstrap";
import NavigationTabs from "./NavigationTabs"; 
import SalarySettings from "./SalarySettings";
import ClassSettings from "./ClassSettings";
import ScheduleSettings from "./ScheduleSettings";
import PromoteSettings from "./PromoteSettings";
import HolidaysSettings from "./HolidaysSettings";
import OrganizationSettings from "./OrganizationSettings";
import PersonalSettings from "./PersonalSettings";
import LeaveSettings from "./LeaveSettings";
import BusServiceSettings from "./BusServiceSettings";
import { getAvailableSettings } from "../../http/http-calls";
import SpinnerLoading from "../../components/SpinnerLoading";

const Settingss = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [allSettings, setAllSettings] = useState({});
  const loginType = useSelector((state) => state.userCredential.user.loginType);
  const [activeTab, setActiveTab] = useState("7");
  const [isLoading, setIsLoading] = useState(true);


  const fetchSettings = async () => {
    setIsLoading(true);

    try {
      const response = await getAvailableSettings();
      console.log("response>>>", response.settings.busamount);
      setAllSettings(response?.settings);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (loginType === "admin") {
      setUserType(loginType);
    }
  }, [loginType]);

  useEffect(() => {
    fetchSettings();
  }, []);

  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  const onAddClick = () => {
    // Handle the add click logic here
    console.log("Add clicked");
  };

  return (
    <>
     {isLoading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <SpinnerLoading />
        </div>
      ) : (
      <div className="disputes_tab">
        <NavigationTabs
          userType={userType}
          activeTab={activeTab}
          _toggleTab={_toggleTab}
        />

        <TabContent
          style={{ maxWidth: "900px", margin: "auto", padding: "0" }}
          activeTab={activeTab}
        >
          <h6 style={{ textAlign: "center", marginTop: "10px" }}>Settings</h6>

          <BusServiceSettings
            activeTab={activeTab}
            tabId="1"
            title="Bus Service"
            settings={allSettings.busFee}
          />

          <SalarySettings
            activeTab={activeTab}
            tabId="2"
            title="Salary"
            settings={allSettings.salary}
          />

          <ClassSettings
            activeTab={activeTab}
            tabId="3"
          />

          <ScheduleSettings
            activeTab={activeTab}
            tabId="4"
          />

          <PromoteSettings
            activeTab={activeTab}
            tabId="5"
          />

          <HolidaysSettings
            activeTab={activeTab}
            tabId="6"
          />

          <PersonalSettings
            activeTab={activeTab}
            tabId="7"
          />

          <OrganizationSettings
            activeTab={activeTab}
            tabId="8"
          />

          <LeaveSettings
            activeTab={activeTab}
            tabId="9"
            title="Leaves"
            settings={allSettings.leave}

          />
        </TabContent>
      </div>
      )}
    </>
  );
};

export default Settingss;
