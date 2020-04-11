import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
const pages = [
  {
    title: "Members Details",
    href: "/details",
    icon: <PersonOutlineIcon />,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
  },
];

export default pages;
