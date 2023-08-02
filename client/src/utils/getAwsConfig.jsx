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
        responseType: "token",
      },
    },

  };
}