import React from "react";
import "./App.css";
import   {Amplify, Auth}  from 'aws-amplify'
import { getAwsConfig } from "./utils/getAwsConfig";

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
    <div>
      {loginStatus && (<h1> Welcome </h1>)}
    </div>);
}

export default App;
