var appFB = {};
(function () {
    // Make sure you replace this code with youre api key, that you get from firebase
    var config = {
        apiKey: "AIzaSyDsWeGkTPCwQdLrjmKvZ83c_LaY37IPtgc",
        authDomain: "arveland-71eab.firebaseapp.com",
        databaseURL: "https://arveland-71eab.firebaseio.com",
        projectId: "arveland-71eab",
        storageBucket: "arveland-71eab.appspot.com",
        messagingSenderId: "759737890550",
    };
    firebase.initializeApp(config);
    appFB = firebase;
})();