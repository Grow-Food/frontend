// import libs
import React, {useContext} from 'react';
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
      <Switch>
        <Route path="/signin">
          <SignInAndSignUpPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
