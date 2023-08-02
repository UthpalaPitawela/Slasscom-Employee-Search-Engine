import React from "react";
import "./App.css";
import   {Amplify, Auth}  from 'aws-amplify'
import { getAwsConfig } from "./utils/getAwsConfig";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";

// import withSamlAuthentication from './common/withSamlAuthentication ';
// import SearchPage from "./pages/SearchPage";

// const AuthenticatedSearchPage = withSamlAuthentication(SearchPage);


function App() {
  const [loginStatus, setLoginStatus] = React.useState(false);

  React.useEffect(() => {
    Amplify.configure(getAwsConfig());

    const checkIfUserLoggedIn = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        return true;
      } catch {
        await Auth.federatedSignIn();
        return false;
      }
    };

    checkIfUserLoggedIn().then((data) => setLoginStatus(data));
  }, [loginStatus]);

  return (
    <Router>
    <Routes>
      <Route path="/search" element={<SearchPage />}>        
      </Route>
    </Routes>
  </Router>
    );
}

export default App;
