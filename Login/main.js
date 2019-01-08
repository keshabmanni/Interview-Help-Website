
function login(){
    var email=document.getElementById(luname).value;
    var password=document.getElementById(lpsw).value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        Window.alert("Error:" +errorMessage);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var user = firebase.auth().currentUser;
            Window.alert("Signe din");

        } else {
          // No user is signed in.
          Window.alert("User not signed in");
        }
      });

    
    
}
function register(){
    var remail=document.getElementById(runame).value;
    var rpassword=document.getElementById(rpsw).value;

    firebase.auth().createUserWithEmailAndPassword(remail, rpassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        Window.alert("Error:" +errorMessage);
        // ...
    });
    Window,alert("You are registered in");
    
}