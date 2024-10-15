import React from "react";
import { NavLink } from "react-router-dom";

export const AppNavLink = ({ label, url, className }) => {
  return (
    <NavLink to={url} title={label} className={className}>
      {label}
    </NavLink>
  );
};

export default AppNavLink;
