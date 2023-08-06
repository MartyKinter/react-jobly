import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import JoblyApi from '../../api';
import CompanyJob from './CompanyJob';

function Company() {
  const {handle} = useParams();
  const [company, setCompany] = useState('');
  const [jobs, setJobs] = useState('');

  useEffect(function setCompanyInfo() {
    async function fetchCompanyInfo(handle) {
      const company_req = await JoblyApi.getCompany(handle);
      setCompany(company_req);
      setJobs(company_req.jobs);
    }
    fetchCompanyInfo(handle);
  }, [handle]);

  return (
      <>
        <h1>{company.name}</h1>
        <p>{company.description}</p>
      <div>
        {jobs? jobs.map(job => (<CompanyJob job={job} company={company}/>)): <>Loading</>}
      </div>
      </>
  )
}

export default Company;