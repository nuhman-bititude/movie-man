import React from "react";
import "../App.css";

function NotFound() {
  return (
    <div>
      <div className="error-notice">
        <div className="oaerror danger">
          <strong>Oops</strong>
          <p className="error-p">- Couldn't find the Movie Please try again.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
