import { testModel } from './../app/models/test-model';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyC9BLinaM0hsjGl-gbbYGbabH4yt-89Wxw",
    authDomain: "angular-image-gallery-352b5.firebaseapp.com",
    databaseURL: "https://angular-image-gallery-352b5-default-rtdb.firebaseio.com",
    projectId: "angular-image-gallery-352b5",
    storageBucket: "angular-image-gallery-352b5.appspot.com",
    messagingSenderId: "438231266857",
    appId: "1:438231266857:web:db1e3464706a1e0baa8e38",
    measurementId: "G-GSDTNLX9P6"
  },
  fun:(par)=>{console.log(par)},
  hospitals : [
    "ziv",
    "rambam",
    "hadasa ein-carem",
    "hadasa har-hazofim",
    "shiba",
    "belinson",
    "sharey tzedek",
    "mayney hayeshuha"

  ],

  tests : [
    new testModel({title: "test1", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
    new testModel({title: "test2", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
    new testModel({title: "test3", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
    new testModel({title: "test4", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
    new testModel({title: "test5", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
  ],

  practices : [
    new testModel({title: "practice1", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
    new testModel({title: "practice2", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
    new testModel({title: "practice3", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
    new testModel({title: "practice4", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
    new testModel({title: "practice5", questions:
    [
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
      {body : "2+2", answers : ["1", "2", "3", "4"], rightAnswer : "D", correct : null, examineeAnswer : null},
    ], examineeName:"", date:null, score: null}),
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
