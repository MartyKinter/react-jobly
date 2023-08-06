import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForm({register}) {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(formData);
    setFormData(INITIAL_STATE);
    history.push('/');
    alert("Registration Complete!");
  }
    return (
      <>
        <h1 style={{color: 'white'}}>Signup page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
          />
          <Form.Control
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
          <Form.Control
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <Form.Control
            name="username"
            id="email"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
          <Form.Control
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <Button type="submit">Sign Up</Button>
        </Form>
      </>
    )
  }
  
  export default SignupForm;