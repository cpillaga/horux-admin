// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  // url: `https://bee.com.ec/`,
  // URL_WEBSOCKET: `https://bee.com.ec/`,
  
  url: `http://181.199.46.137:3001/`,
  URL_WEBSOCKET: `http://181.199.46.137:3001`,
  
  // url: 'http://localhost:3001/',
  // URL_WEBSOCKET: 'http://localhost:3001',

  tokenMap: 'pk.eyJ1IjoicGxlbWE3MDQiLCJhIjoiY2p4a2o3cmhzMjRleDN0cDZweWJpeWducyJ9.iLAt8_WcAk6ShXSp6FooEg',

  URL_CONTIFICO: 'https://api.contifico.com/sistema/api/v1/',

  firebase: {
    apiKey: "AIzaSyCDvAaF2cW8CAfWu-Cen7oQ02po6q4VIbs",
    authDomain: "bee-customer-31f8b.firebaseapp.com",
    projectId: "bee-customer-31f8b",
    storageBucket: "bee-customer-31f8b.appspot.com",
    messagingSenderId: "309318594436",
    appId: "1:309318594436:web:0cf6db1fffc78cdcd877d1",
    measurementId: "G-K8CK5MEZ8Q"
  },
  recaptcha: {
    siteKey: '6Ldlvv0fAAAAACOFizxlG3EiMrj3hZfKsmubk505-',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
