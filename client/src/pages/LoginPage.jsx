import React from 'react';
import { Button } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    // const history = useHistory();

    const redirectToCognito = () => {
        // const clientId = 'YOUR_COGNITO_APP_CLIENT_ID';
        // const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI');
        // const domain = 'YOUR_COGNITO_DOMAIN';
        // const samlProviderName = 'YOUR_SAML_PROVIDER_NAME';

        // const cognitoLoginUrl =
        //     `https://${domain}.auth.us-east-1.amazoncognito.com/login?response_type=token` +
        //     `&client_id=${clientId}&redirect_uri=${redirectUri}` +
        //     `&identity_provider=${samlProviderName}`;
        window.location.href = "https://slasscom-emp-search.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=2mn9cvdkn2s1eafkcvfkifuevs&response_type=code&scope=email+openid+profile&redirect_uri=https%3A%2F%2Fjwt.io";

        // history.push("");

  };

  return <Button onClick={redirectToCognito}>Login with SAML</Button>;
};

export default LoginPage;
