import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Company from './components/companies/Company';
import CompanyList from './components/companies/CompanyList';
import JobList from './components/jobs/JobList';
import LoginForm from './components/forms/LoginForm';
import Profile from './Profile';
import SignupForm from './components/forms/SignupForm';
import Homepage from "./Homepage";

function Routes({ login, register, token }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
        {token ? <Homepage/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/companies">
          {token ? <CompanyList/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/companies/:handle">
          {token ? <Company/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/jobs">
          {token ? <JobList/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/login">
          <LoginForm login={login}/>
        </Route>
        <Route exact path="/profile">
          {token ? <Profile/> : <Redirect to='/login'/>}
        </Route>"
        <Route exact path="/signup">
          <SignupForm register={register}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
