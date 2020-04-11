import React from "react";
import { Grid } from "@material-ui/core";
import { UserDetailBox } from "../../components";
import useStyles from "./styles";
import { connect } from "react-redux";
import moment from "moment";
import minutesDiff from "../../../../selectors/minutesDiff";

const UserDetails = (props) => {
  const classes = useStyles();

  console.log(
    moment(new Date("Feb 1 2020 1:43 AM")).diff(
      moment(new Date("Feb 1 2020 1:33 PM")),
      "hours"
    ),
    "moment"
  );

  console.log(
    props.members.map((ele) => {
      return ele.activity_periods
        .map((ele2) => {
          return Math.abs(
            moment(new Date(ele2.start_time)).diff(
              new Date(ele2.end_time),
              "minutes"
            )
          );
        })
        .reduce((a, b) => a + b, 0);
    }),
    "members"
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {props.members.map((data) => {
          return (
            <Grid item lg={3} sm={6} xl={3} xs={12} key={data.id}>
              <UserDetailBox
                route={`/member/${data.id}`}
                id={data.id}
                title={data.real_name}
                value={
                  Math.trunc(minutesDiff(data.activity_periods) / 60) +
                  ":" +
                  (minutesDiff(data.activity_periods) % 60) +
                  " " +
                  "hrs active"
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    members: state.members,
  };
};
export default connect(mapStateToProps)(UserDetails);
