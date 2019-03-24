import * as functions from 'firebase-functions';
import axios from 'axios';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getIp = functions.region('europe-west1').https.onCall(async (data, context) => {
    return (await axios.get('https://api.ipify.org?format=json')).data.ip;
});
