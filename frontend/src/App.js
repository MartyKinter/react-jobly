import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './App.css';
import Routes from './Routes';
import NavBar from './Navbar';
import JoblyApi from './api';
import useLocalStorage from './useLocalStorage';
import userContext from './userContext';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [currentToken, setCurrentToken] = useLocalStorage('token');
  const [appliedIds, setAppliedIds] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const login = async (loginFormData) => {
    try {
      const res = await JoblyApi.login(loginFormData);
      setCurrentToken(res.token);
      console.log("login success")
    } catch (e) {
      alert(e);
      console.error("Problem in login", e)
    }
  }

  const register = async (signupFormData) => {
    const res = await JoblyApi.register(signupFormData);
    setCurrentToken(res.token);
  }

  const logout = async () => {
    setCurrentToken(null);
    setCurrentUser('');
    setUserInfo({});
    alert("User logged out");
  }

  useEffect(() => {
    // get user info each time there is a login
    const getUserInfo = async (username) => {
      JoblyApi.token = currentToken;
      const res = await JoblyApi.getUser(username);
      setUserInfo(res);
      setAppliedIds(new Set(res.applications));
    }

    // check if there is a token
    const token_check = localStorage.getItem('token');
    if (token_check) {
      const {username} = jwt_decode(token_check);
      setCurrentUser(username);
      getUserInfo(username);
    }
    setIsLoading(false);
  }, [currentToken]);

  if (isLoading) {
    return (<div>LOADING</div>);
  }

  const applyToJobId = async (jobId) => {
    console.log("job id is:", jobId);
    const res = await JoblyApi.applyToJob(currentUser, jobId);
    if (appliedIds.has(res.applied)) {
      return;
    } else {
      appliedIds.add(res.applied);
    }
  }

  const checkApplied = (jobId) => {
    return appliedIds.has(jobId);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{userInfo, currentUser, checkApplied, appliedIds, applyToJobId}}>
          <NavBar 
            currentUser={currentUser} 
            logout={logout}
          />
          <Routes 
            login={login} 
            register={register}
            token={currentToken}
          />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
