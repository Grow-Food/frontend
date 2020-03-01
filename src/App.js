// import libs
import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

// state provider
import {GlobalProvider} from './context/GlobalState';

// import components
import AppMenu from './components/AppMenu/AppMenu';

// import pages
import LandingPage from './pages/public/LandingPage/LandingPage';
import SignInAndSignUpPage from './pages/public/SignInAndSignUpPage/SignInAndSignUpPage';
import DashboardPage from './pages/protected/DashboardPage/DashboardPage';

function App() {
  return (
    <GlobalProvider>
      <AppMenu />

      {/* PAGE CONTAINER */}
      <div className="container">
        <Switch>
          <Route path="/signin">
            <SignInAndSignUpPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
      {/* END PAGE CONTAINER */}

    </GlobalProvider>
  );
}

export default App;
