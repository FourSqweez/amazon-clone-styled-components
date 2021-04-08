import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBvp8JohoZ0J7wd_dHwvv5XXaZMO_I2yCU',
  authDomain: 'clone-mar2021-13c0c.firebaseapp.com',
  projectId: 'clone-mar2021-13c0c',
  storageBucket: 'clone-mar2021-13c0c.appspot.com',
  messagingSenderId: '237379130045',
  appId: '1:237379130045:web:9db7b5e0c66160b58c9dd4',
})

const db = firebase.firestore()

export { db }
