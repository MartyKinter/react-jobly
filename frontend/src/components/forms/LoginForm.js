import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm({login}) {
  const INITIAL_STATE = {username: "", password: ""}
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
    alert("Login Successful!");
  }
    return (
      <>
        <h1 style={{color: 'white'}}>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <Button type="submit">Login</Button>
        </Form>
      </>
    )
  }
  
  export default LoginForm;