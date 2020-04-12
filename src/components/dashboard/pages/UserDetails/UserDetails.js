import React from "react";
import { Grid } from "@material-ui/core";
import { UserDetailBox } from "../../components";
import useStyles from "./styles";
import { connect } from "react-redux";
import minutesDiff from "../../../../selectors/minutesDiff";

const UserDetails = (props) => {
  const classes = useStyles();

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
