import React from "react";
import { useNavigate } from "react-router-dom";
export const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>ERROR - Error 404 - Page Not Found</h1>
      <button onClick={navigate("/")}>Home</button>
    </div>
  );
};
