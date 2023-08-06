import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CompanyCard({company}) {
  const cardStyle = {
    width: '50rem', 
    height: '100%',
    margin: '10px',
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
            <Card.Header className="bg-dark text-white">{company.name}</Card.Header>
            <Card.Body>
              <Card.Text>{company.description}</Card.Text>
              <Link to={`companies/${company.handle}`}>Learn More</Link>
            </Card.Body>
          </Card>
        </div>
    )
}

export default CompanyCard;