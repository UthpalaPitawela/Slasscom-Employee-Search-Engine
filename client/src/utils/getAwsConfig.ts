
export function getAwsConfig() {
  return {
    Auth: {
      region: process.env.REACT_APP_AUTH_REGION,
      userPoolId: process.env.REACT_APP_AUTH_USER_POOL,
      userPoolWebClientId: process.env.REACT_APP_AUTH_CLIENT,
      oauth: {
        domain: process.env.REACT_APP_AUTH_DOMAIN,
        scope: [
          "email",
          "profile",
          "openid",
        ],
        redirectSignIn: process.env.REACT_APP_CALLBACK_URL,
        redirectSignOut: process.env.REACT_APP_CALLBACK_URL,
        responseType: "token"
      },
    },
    API: {
      aws_appsync_graphqlEndpoint:process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT,
      aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
      aws_appsync_authenticationType: process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE,
      aws_appsync_apiKey: process.env.REACT_APP_AWS_APPSYNC_API_KEY,
  },
  };
}