import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useStyles from "./styles";
import minutesDiff from "./../../../../selectors/minutesDiff";

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
          <TableRow key={row.name}>
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
