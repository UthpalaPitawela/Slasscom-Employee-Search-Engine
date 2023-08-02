import React, { useEffect, useState } from 'react';
// import { Auth } from 'aws-amplify';

const withSamlAuthentication = (WrappedComponent) => {
  const WithSamlAuthentication = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const handleSamlRedirect = async () => {
        const urlParams = new URLSearchParams(window.location.hash.substr(1));
        const idToken = urlParams.get('id_token');

        if (idToken) {
          try {
            // Exchange the SAML ID token with Cognito to get a session
            // const session = await Auth.exchangeAccessTokenForSession(idToken);
            setIsAuthenticated(true);
          } catch (error) {
            console.error('Error exchanging SAML ID token:', error);
          }
        }
      };

      handleSamlRedirect();
    }, []);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return WithSamlAuthentication;
};

export default withSamlAuthentication;
