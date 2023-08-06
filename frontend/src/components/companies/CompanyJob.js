import React, {useEffect, useState, useContext} from 'react';
import userContext from '../../userContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CompanyJob({job, company}) {
  const {appliedIds, checkApplied, applyToJobId} = useContext(userContext);
  const [appliedState, setAppliedState] = useState(false);

  useEffect(() => {
    setAppliedState(checkApplied(job.id))
  }, [appliedIds]);
  
  const handleApply = async () => {
    if (checkApplied(job.id)) {
      return;
    } else {
      applyToJobId(job.id);
      setAppliedState(true);
    }
  }

  const cardStyle = {
    width: '18rem', 
    height: '100%',
    marginTop: '10px'
  }
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
  return (
    <div style={divStyle}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>Salary: {job.salary}</Card.Text>
          <Card.Text>Equity: {job.equity}</Card.Text>
          <Button onClick={handleApply}>{appliedState? "Applied": "Apply"}</Button>
        </Card.Body>
      </Card>
    </div>)
}

export default CompanyJob;