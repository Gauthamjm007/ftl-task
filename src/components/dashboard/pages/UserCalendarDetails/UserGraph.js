import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useTheme } from "@material-ui/core";

export default function UserGraph(props) {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={props.data}
        margin={{ top: 0, right: -15, left: -20, bottom: 0 }}
      >
        <XAxis dataKey="month" tick={{ fontSize: 30 }} />
        <YAxis tick={{ fontSize: 30 }} />
        <Bar dataKey="hours" barSize={50} fill={theme.palette.primary.dark} />
      </BarChart>
    </ResponsiveContainer>
  );
}
