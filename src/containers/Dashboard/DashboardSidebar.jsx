import { ListGroup, ListGroupItem, NavbarBrand } from "reactstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../helper-methods";
import { ROUTES } from "../../config/routes-config";
import { useSelector } from "react-redux";
const DashboardSidebar = ({ isShow, setIsShow }) => {
  const { loginType, isSuperAdmin } = useSelector(
    (state) => state?.userCredential?.user
  );
  const UserID = useSelector((state) => state.userCredential.user.id);
  console.log("UserID >>>", UserID);

  const navigate = useNavigate();
  const location = useLocation();

  const routeKey = isSuperAdmin ? "superAdmin" : loginType;

  const _logout = () => {
    logout(navigate);
  };

  // menu
  const _isActiveTab = (route) => {
    return location?.pathname === route ? true : false;
  };

  const _toggleSidebar = () => {
    setIsShow(!isShow);
  };

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
            style={{
              flex: "1",
              overflowY: "auto",
              maxHeight: "calc(100vh - 200px)",
            }}
          >
            <div className="sidebarMenu">
              <ListGroup>
                <ListGroupItem
                  className={_isActiveTab("/dashboard") ? "active" : ""}
                  onClick={() => navigate("/dashboard")}
                >
                  {_isActiveTab("/dashboard") ? (
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
                  <span>Dashboard</span>
                </ListGroupItem>
                <ListGroup>
                  {ROUTES?.[routeKey]?.map(
                    (curr) => (
                      console.log(curr.text),
                      curr.text === "Report" ? (
                        <ListGroupItem
                          key={curr.route} // Add a unique key
                          className={_isActiveTab(curr.route) ? "active" : ""}
                          onClick={() =>
                            navigate(
                              `${curr.route}?class=10thGrade&academicYear=2023-2024`
                            )
                          }
                        >
                          <img
                            src={require(`../../assets/img/SidebarMenu/payment${
                              _isActiveTab(curr.route) ? "Active" : ""
                            }.png`)}
                            alt=""
                          />
                          <span>{curr.text}</span>
                        </ListGroupItem>
                      ) : (
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
                      )
                    )
                  )}
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
