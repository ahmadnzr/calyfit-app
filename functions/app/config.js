const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./permission.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = {
  functions,
  db,
};
