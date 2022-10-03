import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import Home from './Home';
import SignUp from './SignUp';
import FetchApi from './FetchApi';
import Login1 from './Login1';
import Course from './Course';
import CourseAdd from './CourseAdd';
import CourseDel from './CourseDel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Abacus Academy</NavLink>
            
            
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/fetchapi" component={FetchApi}/>       
              <Route path="/login1" component={Login1}/>
              <Route path="/admindashboard" component={AdminDashboard}/> 
              <Route path="/course" component={Course}/>     
              <Route path="/courseadd" component={CourseAdd}/>
              <Route path="/coursedelete" component={CourseDel}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
