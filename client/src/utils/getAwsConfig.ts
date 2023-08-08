// import config from "./config.json";

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
      // endpoints: [
      //     {
      //         name: 'MyFunction',
      //         endpoint: 'https://lambda.eu-west-1.amazonaws.com/2015-03-31/functions/MyFunction/invocations',
      //         service: 'lambda',
      //         region: 'eu-east-1',
      //     },
      // ],
      aws_appsync_graphqlEndpoint:process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT,
      aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
      aws_appsync_authenticationType: process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE,
      aws_appsync_apiKey: process.env.REACT_APP_AWS_APPSYNC_API_KEY,
  },
  };
}