// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*******************************************************
Add your project's Firebase info down there.
Don't forget to rename this file to 'environment.ts'.
*******************************************************/

export const environment = {
  production: false,
  firebase: {
    apiKey: 'your_api_key',
    authDomain: 'your_auth_domain',
    databaseURL: 'your_database_url',
    projectId: 'your_project_id',
    storageBucket: 'your_storage_bucket',
    messagingSenderId: 'your_messaging_sender_id'
  }
};

// In development mode, for easier debugging, you can ignore zone related error
// stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
// below file. Don't forget to comment it out in production mode
// because it will have a performance impact when errors are thrown

// import 'zone.js/dist/zone-error'; Included with Angular CLI.
