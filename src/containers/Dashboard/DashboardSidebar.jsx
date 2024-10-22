import React from "react";
import { Button, ListGroup, ListGroupItem, NavbarBrand } from "reactstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../helper-methods";
import { SUPER_ADMIN_ROUTES } from "../../config/helper-config";
import { ADMIN_ROUTES } from "../../config/helper-config";
const DashboardSidebar = ({ isShow, setIsShow }) => {
  const navigate = useNavigate();
  const _logout = () => {
    logout(navigate);
  };
  const location = useLocation();
  // menu
  const _isActiveTab = (route) => {
    return location?.pathname === route ? true : false;
  };

  const _toggleSidebar = () => {
    setIsShow(!isShow);
  };
  console.log(SUPER_ADMIN_ROUTES);
  const menus = ["dashboard", "disputes"];
  return (
    <>
      {/* add show class after click on bar icon  */}
      <div
        className={`sidebarWrapper show ${isShow ? "show" : ""}`}
        onClick={() => _toggleSidebar()}
      >
        <div className="sidebarInner pb-4">
          <NavbarBrand
            onClick={() => navigate("/")}
            className="py-4 px-3 d-flex justify-content-center"
            style={{ borderBottom: "1px solid #EBEBEB", marginBottom: "30px" }}
          >
            <img
              src={require("../../assets/img/company-logo.png")}
              alt="Logo"
              width="150px"
            />
          </NavbarBrand>

          <div
            className="d-flex flex-column justify-content-between px-3"
            style={{ flex: "1" }}
          >
            <div className="sidebarMenu">
              <ListGroup>
                {/* <ListGroupItem
                  className={_isActiveTab("/payment") ? "active" : ""}
                  onClick={() => navigate("/payment")}
                >
                  {_isActiveTab("/payment") ? (
                    <img
                      src={require("../../assets/img/SidebarMenu/paymentActive.png")}
                      alt=""
                    />
                  ) : (
                    <img
                      src={require("../../assets/img/SidebarMenu/payment.png")}
                      alt=""
                    />
                  )}
                  <span>Admin</span>
                 
                </ListGroupItem> */}
                <ListGroup>
                  {SUPER_ADMIN_ROUTES.map((curr) => (
                    <ListGroupItem
                      key={curr.route} // Add a unique key
                      className={_isActiveTab(curr.route) ? "active" : ""}
                      onClick={() => navigate(curr.route)}
                    >
                      <img
                        src={require(`../../assets/img/SidebarMenu/payment${
                          _isActiveTab(curr.route) ? "Active" : ""
                        }.png`)}
                        alt=""
                      />
                      <span>{curr.text}</span>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </ListGroup>
            </div>

            <div className="sidebarMenu">
              <ListGroup>
                <ListGroupItem onClick={() => _logout()}>
                  <img
                    src={require("../../assets/img/logout.svg").default}
                    alt=""
                  />
                  <span>Logout</span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
