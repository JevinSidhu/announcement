// Jevin Sidhu, November 26th, 2015, ICS3UR - C, Annoucement-School

// Global object created
var userInfo = { };

// Function to run on sign-up
function register() {
    
    // Storing information into the previously created global object
    userInfo = {
        email: $("#email").val(),
        username: $("#username").val(),
        password: $("#password").val()
    };
    
    /* global bootbox */
    // Dialog Box with information
    bootbox.dialog({
        title: "Successfully Created Account",
        message: 'Email: ' + userInfo.email + '<br> Username: ' + userInfo.username + '<br> Password: ' + userInfo.password,
        
        buttons: {
            success: {
                label: "Let's go!",
                className: "btn-success",
                callback: function() {
                window.location.replace("signin.html");
                }
            }
        }
         
    });
    
    // Local Storage
    localStorage.userName = userInfo.username;
    localStorage.password = userInfo.password;
}

// Checking the form to validate identity    
function checkForm() {
    
    // Storing values of input boxes in variables
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Checking to see if the entered values match the ones in the "database"
    if ((username == localStorage.userName) && (password == localStorage.password)) {
        setInterval(function() {window.location = "index.html";}, 500);
        return false;
        
    } else {
      // Shaking animation if error, feedback to the user -- good UX
      
      // Storing keyword in variable
      var animationName = "animated shake";
      
      // Adding an animation to the ID "shakeItOff" 
      $("#shakeItOff").addClass(animationName, function() {
        $(this).removeClass(animationName); });
      
      // Fading out the text and fading in "incorrect"
      $("#titler").fadeOut(function() {
        $(this).text("incorrect"); }).fadeIn();
    
      // Fading out the text and fading in "sign in"
      $("#titler").fadeOut(function() {
        $(this).text("sign in"); }).fadeIn();
    } 

}

// Inserting name into dashboard with "innerHTML" function
document.getElementById("insert").innerHTML = localStorage.userName;