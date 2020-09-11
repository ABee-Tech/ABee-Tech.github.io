
$('.carousel').carousel({
  interval: 5000,
  keyboard: true,
  pause: "hover",
  ride: false,
  wrap: true
});

$(document).ready(function(){
  var loginStateGet = localStorage.getItem("myAppsLoginState");

  
  if (loginStateGet == null){
    localStorage.setItem("myAppsLoginState", 0);
  }
  
})

function logIn() {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  
  if (email == "email" && pass == "pass") {
    alert('You are successfully logged in!');
    window.location.href='home.htm';
    localStorage.setItem("myAppsLoginState", 1);
  } else {
    $('#sthgWrong').show();
  }
}

function logOut() {
  
  var loginState = localStorage.getItem("myAppsLoginState");
  if (loginState == 0 || loginState == null){
    alert('You are not logged in to do so!');
    
  } else if (loginState == 1){
    alert('You are successfully logged out!');
    window.location.href='index.html';
    localStorage.setItem("myAppsLoginState", 0);
  }
  
}
