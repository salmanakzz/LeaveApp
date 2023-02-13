import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchApplications } from "../../api";
import { Application } from "../Application/Application";

export const Applications = () => {
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    fetchApplications().then(({ data }) => {
      setApplications(data);
    });
  }, []);

  return (
    <div className="w-[100%] pl-[1rem] pt-4">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Leave Applications
      </Typography>

      {applications?.map((app, id) => (
        <Application app={app} key={id} />
      ))}
    </div>
  );
};
