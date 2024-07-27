import React, { useState } from "react";

import JobCard from "../JobCard/JobCard";

const JobNav = () => {
  const [flag, setFlag] = useState(true);
  const jobList = () => {
    setFlag(true);
  };

  const myJobs = () => {
    setFlag(false);
  };

  return (
    <div className="flex-col ">
      <div className="flex justify-around">
        <div>
          <button
            onClick={() => {
              jobList();
            }}
          >
            Job List
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              myJobs();
            }}
          >
            My Jobs
          </button>
        </div>
      </div>
      {/* {flag ? <JobCard flag={flag} /> : ""} */}
      <JobCard flag={flag} />
    </div>
  );
};

export default JobNav;
