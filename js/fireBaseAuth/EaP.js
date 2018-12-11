 (function () {
     // Initialize Firebase
     var config = {
         apiKey: "AIzaSyDRFXt1mlKIHU393KCOC0jraPx2toS2QZQ",
         authDomain: "mianmedia-ca668.firebaseapp.com",
         databaseURL: "https://mianmedia-ca668.firebaseio.com",
         projectId: "mianmedia-ca668",
         storageBucket: "",
         messagingSenderId: "824095606003"
     };
     firebase.initializeApp(config);

     const loginemail = document.getElementById('loginemail');
     const loginpassword = document.getElementById('loginpassword');
     const registeremail = document.getElementById('registeremail');
     const registerpassword = document.getElementById('registerpassword');
     const loginBut = document.getElementById('loginBut');
     const regBut = document.getElementById('regBut');
     const logoutBut = document.getElementById('logoutBut');

     // log in meathod
     loginBut.addEventListener('click', e => {
         // Get user details
         const email = loginemail.value;
         const password = loginpassword.value;
         const auth = firebase.auth();
         // Sign user in
         const promise = auth.signInWithEmailAndPassword(email, password);
         promise.catch(e => console.log(e.message));
     });

     // Register meathod
     regBut.addEventListener('click', e => {
         // Get user details
         const email = registeremail.value;
         const password = registerpassword.value;
         const auth = firebase.auth();
         // Sign user up
         const promise = auth.createUserWithEmailAndPassword(email, password);
         promise.catch(e => console.log(e.message));
     });

     // Log out meathod 
     logoutBut.addEventListener('click', e => {
         firebase.auth().signOut();
         changeScreen('homepage');
         $('#loginnavButton').show();
         $('#logoutBut').hide();
     });


     // Auth Change State
     firebase.auth().onAuthStateChanged(firebaseUser => {
         if (firebaseUser) {
             // Signed in
             console.log(firebaseUser + " has signed in successfully")
             changeScreen('homepage');
             $('#loginnavButton').hide();
             $('#logoutBut').show();
         } else {
             // Signed Out
             console.log('User is not logged in');
         }
     });


 }());