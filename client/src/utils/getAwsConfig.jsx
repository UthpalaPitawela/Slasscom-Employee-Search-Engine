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
        redirectSignIn: `${config.SITE_URL}`,
        redirectSignOut: `${config.SITE_URL}`,
        responseType: "token",
      },
    },
    // API: {
    //   endpoints: [
    //     {
    //       name: "API",
    //       endpoint: `${config.API_BASE_URL}`,
    //     },
    //   ],
    // },
  };
}