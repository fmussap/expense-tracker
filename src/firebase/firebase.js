import * as firebase from 'firebase'
import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from '../config/keys'

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
}

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
