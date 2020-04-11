import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import moment from "moment-timezone";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CalendarDetail from "./CalendarDetail";
import { connect } from "react-redux";
import UserGraph from "./UserGraph";
import minutesDiffFull from "../../../../selectors/minutesDiffFull";
import { Widget, PageTitle } from "../../components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const UserCalendarDetails = (props) => {
  const classes = useStyles();
  const names = moment.tz.names();
  const id = props.match.params.id;
  const dataForm = props.members.find((memb) => memb.id === id);
  console.log(dataForm, "data");

  const data = dataForm.activity_periods.map((time) => {
    return {
      id: new Date().getUTCMilliseconds() + Math.random(),
      title: `Activity from ${time.start_time} to ${time.end_time}`,
      start: time.start_time,
      end: time.end_time,
      tz: dataForm.tz,
    };
  });
  console.log(data, "data");

  // const data = [
  //   {
  //     id: 0,
  //     title: "All Day Event very long title",
  //     tz: "America/Los_Angeles",
  //     allDay: true,
  //     start: "Feb 1 2020  1:33 PM",
  //     end: "Feb 1 2020 1:54 PM",
  //   },
  //   {
  //     id: 1,
  //     title: "Long Event",
  //     tz: "Asia/Kolkata",
  //     start: "April 5 2020  11:11 AM",
  //     end: "April 6 2020 2:00 PM",
  //   },

  //   {
  //     id: 2,
  //     title: "DTS STARTS",
  //     tz: "America/Los_Angeles",
  //     start: "Mar 16 2020  5:33 PM",
  //     end: "Mar 16 2020 8:02 PM",
  //   },
  // ];

  function timezone(from, to, time) {
    const fromZone = moment.tz(time, from);
    const result = fromZone.clone().tz(to);
    return result.format();
  }

  const [event, Setevent] = React.useState(
    data.map((ele) => {
      return {
        id: ele.id,
        title: ele.title,
        tz: ele.tz,
        start: new Date(ele.start),
        end: new Date(ele.end),
      };
    })
  );
  console.log(
    dataForm.activity_periods.map((time, i) => {
      return {
        month: time.start_time.slice(0, 5),
        hours: minutesDiffFull(dataForm.activity_periods)[i],
      };
    }),
    "dataform"
  );
  console.log(props.match.params.id, "id");

  console.log(event, "old sevent");
  const handleBlur = (e) => {
    const zone = e.target.value.length === 0 ? "Asia/Kolkata" : e.target.value;
    console.log(e.target.value, "value");
    const newEvent = event.map((ele) => {
      return {
        id: ele.id,
        title: ele.title,
        tz: ele.tz,
        start: new Date(timezone(ele.tz, zone, ele.start)),
        end: new Date(timezone(ele.tz, zone, ele.end)),
      };
    });
    Setevent(newEvent);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <PageTitle title={`${dataForm.real_name} Activity Log`} />
          <Link to="/details" style={{ textDecoration: "none" }}>
            <ArrowBackIcon className={classes.arrowicon} />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="combo-box-demo"
            options={names}
            getOptionLabel={(names) => names}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Your Timezone"
                variant="outlined"
                onBlur={handleBlur}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <CalendarDetail events={event} firstdate={event[0].start} />
        </Grid>
        <Grid item xs={12}>
          <Widget title={`${dataForm.real_name} Activity Log in Minutes`}>
            <UserGraph
              data={dataForm.activity_periods.map((time, i) => {
                return {
                  month: time.start_time.slice(0, 6),
                  hours: minutesDiffFull(dataForm.activity_periods)[i],
                };
              })}
            />
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

export default connect(mapStateToProps)(UserCalendarDetails);
