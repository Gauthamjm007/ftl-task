import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useStyles from "./styles";
import minutesDiff from "./../../../../selectors/minutesDiff";
import PropTypes from "prop-types";

/**
 * This component is a table it accepts an array of objects of a format, material ui table is used
 */

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">User</TableCell>
          <TableCell align="right">Time Zone</TableCell>
          <TableCell align="right">activities</TableCell>
          <TableCell align="right">Minutes</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row) => (
          <TableRow key={row.real_name}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.real_name}</TableCell>
            <TableCell align="right">{row.tz}</TableCell>
            <TableCell align="right">{row.activity_periods.length}</TableCell>
            <TableCell align="right">
              {minutesDiff(row.activity_periods)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

SimpleTable.defaultProps = {
  data: [
    {
      id: 1,
      real_name: "real name",
      tz: "Asia",
      activity_periods: [
        {
          start_time: "Feb 1 2020 1:33 PM",
          end_time: "Feb 1 2020 1:54 PM",
        },
      ],
    },
  ],
};
SimpleTable.propTypes = {
  /** string value for heading*/
  data: PropTypes.array,
};
