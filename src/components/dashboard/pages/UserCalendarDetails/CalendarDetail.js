import React from "react";
import "./calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useStyles from "./styles";
import PropTypes from "prop-types";
const localizer = momentLocalizer(moment);

/**
 *
 * react component for displaying users by calendar and their activity take two props a first data of user and a vents of arrays
 */

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

CalendarDetail.propTypes = {
  //event array of objects
  events: PropTypes.array,
};
