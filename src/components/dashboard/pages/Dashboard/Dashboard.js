import React from "react";
import { Grid } from "@material-ui/core";
import union from "lodash/union";
import { InfoBox, Widget, SimpleTable } from "../../components";
import ExploreIcon from "@material-ui/icons/Explore";
import useStyles from "./styles";
import GroupIcon from "@material-ui/icons/Group";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { connect } from "react-redux";
import minutesDiff from "./../../../../selectors/minutesDiff";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SimpleBar from "./SimpleBar";

/**
 * This component is dashboard component it is displayed in main page, on route /dashboard
 */

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Members"
            value={String(props.members.length)}
            icon={<GroupIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Hours Spent by Members"
            value={String(
              Math.round(
                props.members
                  .map((time) => minutesDiff(time.activity_periods))
                  .reduce((a, b) => a + b, 0) / 60
              )
            )}
            icon={<AccessTimeIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Regions"
            value={String(
              union(props.members.map((region) => region.tz)).length
            )}
            icon={<ExploreIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Number of Activity Logs"
            value={String(
              props.members
                .map((activity) => activity.activity_periods.length)
                .reduce((a, b) => a + b, 0)
            )}
            icon={<FormatListNumberedIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>

        <Grid item lg={5} md={6} xl={5} xs={12}>
          <Widget title="All Users Logs">
            <SimpleBar
              data={props.members.map((data) => {
                return {
                  user: data.real_name,
                  hours: minutesDiff(data.activity_periods),
                };
              })}
            />
          </Widget>
        </Grid>
        <Grid item lg={7} md={6} xl={7} xs={12}>
          <Widget title="Members Details">
            <SimpleTable data={props.members} />
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    members: state.members,
  };
};

export default connect(mapStateToProps)(Dashboard);
