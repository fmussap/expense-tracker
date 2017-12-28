import { firebase, googleAuthProvider } from '../firebase/firebase'
import * as actions from './actions-type'

export const login = (uid) => ({
  type: actions.LOGIN,
  uid
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const logout = () => ({
  type: actions.LOGOUT
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
