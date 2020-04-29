
$('.carousel').carousel({
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
    wrap: true
  });



function logIn() {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  
  if (email == "email" && pass == "pass") {
    alert('You are successfully logged in!');
    window.location.href='home.htm';
  } else {
    $('#sthgWrong').show();
  }
}
