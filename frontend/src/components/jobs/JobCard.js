import React, {useContext, useEffect, useState} from 'react';
import userContext from '../../userContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function JobCard({job}) {
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
    width: '30rem', 
    height: '100%',
    marginTop: '10px',
    textAlign: 'left'
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
        <Card.Header className="bg-dark text-white">{job.title}</Card.Header>
        <Card.Body>
          <Card.Text>Salary: {job.salary}</Card.Text>
          <Button onClick={handleApply}>{appliedState? "Applied": "Apply"}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;