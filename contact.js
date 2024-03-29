var firebaseConfig = {
    apiKey: "AIzaSyB5BEq6Nt7cTBlm51ZR200qRyTUm8xQ1SU",
    authDomain: "astitva-b36ef.firebaseapp.com",
    databaseURL: "https://astitva-b36ef.firebaseio.com",
    projectId: "astitva-b36ef",
    storageBucket: "astitva-b36ef.appspot.com",
    messagingSenderId: "634881959128",
    appId: "1:634881959128:web:532a47095c9db129b763ad",
    measurementId: "G-9M0QHVX3NQ"
  };

  // Initialize Firebase
  var app=firebase.initializeApp(firebaseConfig);
  var contactRef = firebase.firestore(app);
$( "#contact" ).submit(function( event ) {
  var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var message=document.getElementById("message").value;
  event.preventDefault();
  var err=validateFormOnSubmit(contact);
  if(err===true)
  {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
    firebasePush(name,email,phone,message,dateTime);
    document.querySelector('.alert').style.display = 'block';
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    },6000);
    $("#contact").trigger("reset");
  }
});

function validateFormOnSubmit(contact) {
    var error=0;
    error += validateName(contact.name);
    error += validateEmail(contact.email);
    error += validatePhone(contact.phone);
    error += validateMessage(contact.message);
    if (error > 0) {
        return false;
    }
    else {
    return true;
    }
}

// validate required fields
function validateName(name) {
  var error=0;
    if (name.value.length == 0) {
        name.style.outline = "2px solid #ff9f9f";
        document.getElementById('name-error').innerHTML = "The required field has not been filled in";
        error = error + 1;
    } else {
        name.style.outline = '0';
        document.getElementById('name-error').innerHTML = '';
    }
    return error;
}

// validate email as required field and format
function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
  var error=0;
    var temail = trim(email.value); // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {
        email.style.outline = "2px solid #ff9f9f";
        document.getElementById('email-error').innerHTML = "Please enter an email address.";
        error = error + 1;
    } else if (!emailFilter.test(temail)) { //test email for illegal characters
        email.style.outline = "2px solid #ff9f9f";
        document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
        error = error + 1;
    } else if (email.value.match(illegalChars)) {
        email.style.outline = "2px solid #ff9f9f";
        error = error + 1;
        document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
    } else {
        email.style.outline = '0';
        document.getElementById('email-error').innerHTML = '';
    }
    return error;
}

// validate phone for required and format
function validatePhone(phone) {
    var error = "0";
    var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');

    if (phone.value == "") {
        document.getElementById('phone-error').innerHTML = "Please enter a phone number";
        phone.style.outline = "2px solid #ff9f9f";
        error = error + 1;
    } else if (isNaN(parseInt(stripped))) {
      error = error + 1;
        document.getElementById('phone-error').innerHTML = "The phone number contains illegal characters.";
        phone.style.outline = "2px solid #ff9f9f";
    } else if (stripped.length < 10) {
      error = error + 1;
        document.getElementById('phone-error').innerHTML = "The phone number is too short.";
        phone.style.outline = "2px solid #ff9f9f";
    } else {
        phone.style.outline = '0';
        document.getElementById('phone-error').innerHTML = '';
    }
    return error;
}

function validateMessage(message) {
  var error=0;
    if (message.value.length == 0) {
        message.style.outline = "2px solid #ff9f9f";
        document.getElementById('message-error').innerHTML = "The required field has not been filled in";
        error = error + 1;
    } else {
      message.style.outline = '0';
      document.getElementById('message-error').innerHTML = '';
    }
    return error;
}

function firebasePush(name,email,phone,message,dateTime) {
  //push itself
  contactRef.collection("ContactDesk").doc().set({
    name: name,
    email:email,
    phone:phone,
    message:message,
    dateTime:dateTime
})
}