import  Rebase  from 're-base'
import  firebase  from 'firebase/app'
import 'firebase/database'

const FirebaseApp = firebase.initializeApp({
    apiKey: "XX",
    authDomain: "XX",
    databaseURL: "XX"
})

const base = Rebase.createClass(firebase.database())

export { FirebaseApp }

export default base