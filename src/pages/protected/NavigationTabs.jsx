// NavigationTabs.js
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavigationTabs = ({ userType, activeTab, _toggleTab }) => (
  <Nav pills>
    {userType === "admin" && (
      <>
        <NavItem>
          <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => _toggleTab("1")}>
            Bus Service
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => _toggleTab("2")}>
            Salary
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => _toggleTab("3")}>
            Class
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={activeTab === "4" ? "active" : ""} onClick={() => _toggleTab("4")}>
            Schedule
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={activeTab === "5" ? "active" : ""} onClick={() => _toggleTab("5")}>
            Promote
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={activeTab === "6" ? "active" : ""} onClick={() => _toggleTab("6")}>
            Holidays
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={activeTab === "7" ? "active" : ""} onClick={() => _toggleTab("7")}>
            Personal
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={activeTab === "8" ? "active" : ""} onClick={() => _toggleTab("8")}>
            Organization
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={activeTab === "9" ? "active" : ""} onClick={() => _toggleTab("9")}>
            Leave
          </NavLink>
        </NavItem>
      </>
    )}
  </Nav>
);

export default NavigationTabs;
