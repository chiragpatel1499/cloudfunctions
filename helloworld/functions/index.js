const functions = require('firebase-functions');
//hello hii
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloworld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs! changes", {structuredData: true});
   response.send("Hello from Firebase!");
});
