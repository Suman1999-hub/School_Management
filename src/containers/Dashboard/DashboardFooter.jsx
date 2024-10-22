import React from "react";

const DashboardFooter = () => {
  return (
    <div className="projectFooter">
      <p>© 2023 Score Clear.</p>

      <div className="copyright">
        <p>Powered By</p>
        <a
          href="https://www.logic-square.com"
          target="_blank"
          rel="noreferrer"
          className="ms-2 lsLink"
        >
          Logic Square
        </a>
      </div>
    </div>
  );
};

export default DashboardFooter;
