import React from "react";
import "./calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useStyles from "./styles";
const localizer = momentLocalizer(moment);

function CalendarDetail(props) {
  const classes = useStyles();
  return (
    <>
      <Calendar
        localizer={localizer}
        defaultDate={props.firstdate}
        defaultView="month"
        events={props.events}
        className={classes.calendar}
      />
    </>
  );
}
export default CalendarDetail;
