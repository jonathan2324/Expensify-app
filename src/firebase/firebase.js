import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID ,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export { firebase, googleAuthProvider, database as default }


  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // database.ref("expenses").on("child_changed", (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })


  // database.ref("expenses").on("child_added", (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // database.ref('expenses').once("value").then("snapshot") => {
  //   const expenses = []
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses)
  // })

// database.ref("expenses").push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 891895610
// })


 

  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val()
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  // })

 
  


  // database.ref('location/city').once('value').then((snapshot) => {
  //   const val = snapshot.val()
  //   console.log(val)
  // }).catch((e) => {
  //   console.log("Error fetching data ", e)
  // })

  // database.ref().set({
  //     name: "Jonathan Huertas",
  //     age: 28,
  //     stressLevel: 6,
  //     job: {
  //       title: 'Software developer',
  //       company: 'Google'
  //     },
  //     location: {
  //         city: "Austin",
  //         country: "United States"
  //     }
  // }).then(() => {
  //     console.log("Data is saved")
  // }).catch((e) => {
  //   console.log('this failed ', e)
  // })

  // database.ref().update({
  //   stressLevel: 9,
  //   "job/company": 'Amazon',
  //   "location/city": "Seattle"
  //   }

  // )

//   database.ref('age').set(29) 

//   database.ref('location/city').set("Dallas")

//   database.ref('attributes').set({
//       color: 'purple',
//       music: "rap"
//   }).then(() => {
//     console.log("Data is saved")
// }).catch((e) => {
//   console.log('this failed ', e)
// })

// database.ref('isSingle').remove()
// database.ref('isSingle').set(null)

