import config from "./config.json";

export function getAwsConfig() {
  return {
    Auth: {
      region: config.AUTH_REGION,
      userPoolId: config.AUTH_USER_POOL,
      userPoolWebClientId: config.AUTH_CLIENT,
      oauth: {
        domain: config.AUTH_DOMAIN,
        scope: [
          "email",
          "profile",
          "openid",
        ],
        redirectSignIn: `${config.CALLBACK_URL}`,
        redirectSignOut: `${config.CALLBACK_URL}`,
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
      aws_appsync_graphqlEndpoint: `${config.AWS_APPSYNC_GRAPHQL_ENDPOINT}`,
      aws_appsync_region: `${config.AWS_APPSYNC_REGION}`,
      aws_appsync_authenticationType: `${config.AWS_APPSYNC_AUTHENTICATION_TYPE}`,
      aws_appsync_apiKey: `${config.AWS_APPSYNC_API_KEY}`,
  },
  };
}