import * as React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { data } from "../../mockData/mockData";

export default function JobCard({ flag }) {
  const [jobs, setJobs] = React.useState([]);
  const [myJobs, setMyJobs] = React.useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);
  //   console.log(data);

  const jobApply = (e) => {
    console.log(e);
    setMyJobs((pre) => [...pre, e]);
    const tempJobs = jobs.filter((item) => item.id !== e.id);
    setJobs(tempJobs);
    // console.log(jobsApplied, flag);
  };
  return (
    <div className="w-4/12">
      {flag
        ? jobs.map((item) => (
            <Card sx={{ minWidth: 275 }} key={item.id}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.jobRole}
                </Typography>
                <Typography variant="body2">{item.location}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    jobApply(item);
                  }}
                >
                  Apply
                </Button>
              </CardActions>
            </Card>
          ))
        : myJobs.map((item) => (
            <Card sx={{ minWidth: 275 }} key={item.id}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.jobRole}
                </Typography>
                <Typography variant="body2">{item.location}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className="bg-lime-400">
                  Applied
                </Button>
              </CardActions>
            </Card>
          ))}
    </div>
  );
}
