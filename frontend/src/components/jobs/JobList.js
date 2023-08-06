import React, {useEffect, useState} from 'react';
import JoblyApi from '../../api';
import JobCard from './JobCard';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

    return (
      <>
        {jobs.map(job => (<JobCard job={job} key={job.id}/>)
        )}
      </>
    )
  }
  
  export default Jobs;