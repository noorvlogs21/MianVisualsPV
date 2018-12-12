 (function () {
    // getting the DOM elements
     const loginemail = document.getElementById('loginemail');
     const loginpassword = document.getElementById('loginpassword');
     const registeremail = document.getElementById('registeremail');
     const registerpassword = document.getElementById('registerpassword');
     const loginBut = document.getElementById('loginBut');
     const regBut = document.getElementById('regBut');
     const logoutBut = document.getElementById('logoutBut');

     // log in method
     loginBut.addEventListener('click', e => {
         // Get user details
         const email = loginemail.value;
         const password = loginpassword.value;
         const auth = firebase.auth();
         // Sign user in
         const promise = auth.signInWithEmailAndPassword(email, password);
         promise.catch(e => alert(e.message));
     });

     // Register method
     regBut.addEventListener('click', e => {
         // Get user details
         const email = registeremail.value;
         const password = registerpassword.value;
         const auth = firebase.auth();
         // Sign user up
         const promise = auth.createUserWithEmailAndPassword(email, password);
         promise.catch(e => alert(e.message));
     });

     // Log out method 
     logoutBut.addEventListener('click', e => {
         firebase.auth().signOut();
         $('#logoutBut').hide();
         $('#loginnavButton').show();
         changeScreen('homepage');
     });

     // Auth Change State
     firebase.auth().onAuthStateChanged(firebaseUser => {
         if (firebaseUser) {
             // Signed in
             console.log(firebaseUser + " has signed in successfully");
             $('#loginnavButton').hide();
             $('#logoutBut').show();
             changeScreen('homepage');
         } else {
             // Signed Out
             console.log('User is not logged in');
         }
     });

 }());