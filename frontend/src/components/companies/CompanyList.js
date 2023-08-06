import React, {useEffect, useState} from 'react';
import SearchForm from '../forms/SearchForm';
import JoblyApi from '../../api';
import CompanyCard from './CompanyCard';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const req = await JoblyApi.getAllCompanies();
      setCompanies(req);
    }
    getCompanies();
  }, []);

  const updateCompanies = (filteredCompanies) => {
    setCompanies([...filteredCompanies]);
  }

  return (
    <>
      <SearchForm updateCompanies={updateCompanies}/>
      <div>
        {companies.map(company => (
          <div key={company.name}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CompanyList;