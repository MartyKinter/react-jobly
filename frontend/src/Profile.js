import React, {useState, useContext} from 'react';
import JoblyApi from './api';
import userContext from './userContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Profile() {
  const {userInfo, currentUser} = useContext(userContext);
  const [formData, setFormData] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await JoblyApi.updateUser(formData, currentUser);
      console.log('Update successful!', res);
      alert("Profile Updated");
    } catch (e) {
      alert(e);
    }
  }
    return (
      <>
        <h1 style={{color: 'white'}}>Profile</h1>
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
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <Button type='submit'>Save</Button>
        </Form>
      </>
    )
  }
  
  export default Profile;