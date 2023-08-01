import React from "react";
import "./App.css";
import '@aws-amplify/ui-react/styles.css';
import LoginPage from "./pages/LoginPage";
// import withSamlAuthentication from './common/withSamlAuthentication ';
// import SearchPage from "./pages/SearchPage";

// const AuthenticatedSearchPage = withSamlAuthentication(SearchPage);


function App() {
  return (
    <div className="App">
      <h1>Slasscom Employee Search Engine</h1>
      <LoginPage/>
      {/* <AuthenticatedSearchPage/> */}
    </div>
  );
}

export default App;
