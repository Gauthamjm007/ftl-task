import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

import UserDetails from "../pages/UserDetails/UserDetails";
import WithLayoutRoute from "./WithLayoutRoute";
import DashboardLayout from "../layouts/Dashboard/Dashboard";
import UserCalendarDetails from "../pages/UserCalendarDetails/UserCalendarDetails";

function Routes() {
  return (
    <Switch>
      <WithLayoutRoute
        component={Dashboard}
        exact
        layout={DashboardLayout}
        path="/dashboard"
      />
      
      <WithLayoutRoute
        component={UserDetails}
        exact
        layout={DashboardLayout}
        path="/details"
      />
      <WithLayoutRoute
        component={UserCalendarDetails}
        exact
        layout={DashboardLayout}
        path="/member/:id"
      />

      <Redirect to="/details" />
    </Switch>
  );
}

export default Routes;
