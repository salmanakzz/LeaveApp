import * as React from "react";
import { Grid, Paper } from "@mui/material";
import parse from "html-react-parser";

export const Application = ({ app }) => {
  const { leaveDate, content } = app;
  const { name, email } = app.user[0];

  return (
    <Grid item xs={12} className="py-1">
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <h1>
          <b>From: {name}</b>
          <br />
          <b>Email: {email}</b>
        </h1>
        <h2>Leave Date : {new Date(leaveDate).toLocaleDateString()}</h2>
        <h2>Message:{parse(content)}</h2>

        <div id="content"></div>
      </Paper>
    </Grid>
  );
};
