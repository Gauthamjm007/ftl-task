import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useTheme } from "@material-ui/core";

export default function SimpleBar(props) {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={props.data}
        margin={{ top: 0, right: -15, left: -20, bottom: 0 }}
      >
        <XAxis dataKey="user" tick={{ fontSize: 15 }} />
        <YAxis tick={{ fontSize: 15 }} />
        <Bar dataKey="hours" barSize={20} fill={theme.palette.primary.dark} />
      </BarChart>
    </ResponsiveContainer>
  );
}
