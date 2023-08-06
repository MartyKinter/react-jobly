import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import JoblyApi from '../../api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchForm({updateCompanies}) {
  const INITIAL_STATE = '';
  const [search, setSearch] = useState(INITIAL_STATE);
  const history = useHistory();
  
  const handleChange = (e) => {
    const {value} = e.target;
    setSearch(value);
  }

  const handleSubmit = async (e) => {
    console.log("SUBMITTED");
    e.preventDefault();
    console.debug('handlesubmit for search form has run');
    const req = await JoblyApi.getSearchedCompanies(search);
    updateCompanies(req);
    setSearch(INITIAL_STATE);
    history.push("/companies");
  }

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
  const formStyle = {
    width: '30rem',
    textAlign: 'center',
    marginTop: '10px'
  }
  return (
    <div style={divStyle}>
      <Form style={formStyle} onSubmit={handleSubmit}>
          <Form.Control
            type="text" 
            id="search-input" 
            placeholder="Search..."
            value={search} 
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default SearchForm;