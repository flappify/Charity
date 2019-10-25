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
  var donationRef = firebase.firestore(app);
function pay(){
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var phone=document.getElementById('phone');
    var address=document.getElementById('address');
    var city=document.getElementById('city');
    var state=document.getElementById('state');
    var zip=document.getElementById('zip');
    var amount=document.getElementById('amount');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var error=validateFormOnSubmit(name,email,phone,address,city,state,zip,amount);
    if(error==0)
    {
        document.getElementById('pay-btn').style.display="none";
        document.getElementById('load-btn').style.display="block";
        var options = {
            "key": "rzp_live_fILY6C0skv6hNH",
            "amount": amount.value*100, // Example: 2000 paise = INR 20
            "name": "PARKLANE ASTITVA",
            "description": "Donation",
            "image": "logo/logo.png",// COMPANY LOGO
            "handler": function (response) {
                firebasePush(name.value,email.value,phone.value,address.value,city.value,state.value,zip.value,amount.value,dateTime,response.razorpay_payment_id);
                name.value="";
                email.value="";
                phone.value="";
                address.value="";
                city.value="";
                state.value="";
                zip.value="";
                amount.value="";
                document.getElementById('success').style.display = 'block';
                setTimeout(function(){
                    document.getElementById('success').style.display = 'none';
                },8000);
                // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
            },
            "prefill": {
                "name":name.value, // pass customer name
                "email": email.value,// customer email
                "contact": phone.value,//customer phone no.
            },
            "notes": {
                "address": address.value, //customer address 
            },
            "theme": {
                "color": "#A31CE3" // screen color
            }
        };
        console.log(options);
        var propay = new Razorpay(options);
        propay.open();
        document.getElementById('load-btn').style.display="none";
        document.getElementById('pay-btn').style.display="block";
    }
}


function validateFormOnSubmit(name,email,phone,address,city,state,zip,amount){
    var error=0;
    error += validateName(name);
    error += validateEmail(email);
    error += validatePhone(phone);
    error += validateAddress(address);
    error += validateCity(city);
    error += validateState(state);
    error += validateZip(zip);
    error += validateAmount(amount);
    return error;
}
function validateName(name) {
    var error=0;
      if (name.value.length == 0) {
        name.style.outline = "2px solid #ff9f9f";
        document.getElementById('name-error').innerHTML = "The required field has not been filled in";
        setTimeout(function(){
            name.style.outline = "";
            document.getElementById('name-error').innerHTML = "";
        },5000);
         
          error = error + 1;
      } else {
          document.getElementById('name-error').innerHTML = '';
      }
      
      return error;
}
function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}
function validateEmail(email){
    var error=0;
      var temail = trim(email.value); // value of field with whitespace trimmed off
      var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
      var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;
  
      if (email.value == "") {
          email.style.outline = "2px solid #ff9f9f";
          document.getElementById('email-error').innerHTML = "Please enter an email address.";
          setTimeout(function(){
            email.style.outline = "";
            document.getElementById('email-error').innerHTML = "";
        },5000);
          error = error + 1;
      } else if (!emailFilter.test(temail)) { //test email for illegal characters
          email.style.outline = "2px solid #ff9f9f";
          document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
          setTimeout(function(){
            email.style.outline = "";
            document.getElementById('email-error').innerHTML = "";
        },5000);
          error = error + 1;
      } else if (email.value.match(illegalChars)) {
          email.style.outline = "2px solid #ff9f9f";
          document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
          setTimeout(function(){
            email.style.outline = "";
            document.getElementById('email-error').innerHTML = "";
            },5000);
        error = error + 1;
      } else {
          email.style.outline = '0';
          document.getElementById('email-error').innerHTML = "";
          setTimeout(function(){
            email.style.outline = "";
            document.getElementById('email-error').innerHTML = "";
        },5000);
      }
      
      return error;
}

function validatePhone(phone) {
    var error = "0";
    var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');

    if (phone.value == "") {
        document.getElementById('phone-error').innerHTML = "Please enter a phone number";
        phone.style.outline = "2px solid #ff9f9f";
        error = error + 1;
        setTimeout(function(){
            phone.style.outline = "";
            document.getElementById('phone-error').innerHTML = "";
        },5000);
    } else if (isNaN(parseInt(stripped))) {
      error = error + 1;
        document.getElementById('phone-error').innerHTML = "The phone number contains illegal characters.";
        phone.style.outline = "2px solid #ff9f9f";
        setTimeout(function(){
            phone.style.outline = "";
            document.getElementById('phone-error').innerHTML = "";
        },5000);
    } else if (stripped.length<10) {
      error = error + 1;
        document.getElementById('phone-error').innerHTML = "The phone number is too short.";
        phone.style.outline = "2px solid #ff9f9f";
        setTimeout(function(){
            phone.style.outline = "";
            document.getElementById('phone-error').innerHTML = "";
        },5000);
    } else {
        phone.style.outline = '0';
        document.getElementById('phone-error').innerHTML = '';
    }
    
    return error;
}

function validateAddress(address) {
    var error=0;
      if (address.value == "") {
        address.style.outline = "2px solid #ff9f9f";
        document.getElementById('address-error').innerHTML = "The required field has not been filled in";
        setTimeout(function(){
            address.style.outline = "";
            document.getElementById('address-error').innerHTML = "";
        },5000);
          error = error + 1;
      } else {
          document.getElementById('address-error').innerHTML = '';
      }
      
      return error;
}

function validateCity(city) {
    var error=0;
      if (city.value == "") {
        city.style.outline = "2px solid #ff9f9f";
        document.getElementById('city-error').innerHTML = "The required field has not been filled in";
        setTimeout(function(){
            city.style.outline = "";
            document.getElementById('city-error').innerHTML = "";
        },5000);
          error = error + 1;
      } else {
          document.getElementById('city-error').innerHTML = '';
      }
      
      return error;
}

function validateState(state) {
    var error=0;
      if (state.value == "") {
        state.style.outline = "2px solid #ff9f9f";
        document.getElementById('state-error').innerHTML = "The required field has not been filled in";
        setTimeout(function(){
            state.style.outline = "";
            document.getElementById('state-error').innerHTML = "";
        },5000);
          error = error + 1;
      } else {
          document.getElementById('state-error').innerHTML = '';
      }
      
      return error;
}

function validateZip(zip) {
    var error=0;
      if (city.value == "") {
        zip.style.outline = "2px solid #ff9f9f";
        document.getElementById('zip-error').innerHTML = "The required field has not been filled in";
        setTimeout(function(){
            zip.style.outline = "";
            document.getElementById('zip-error').innerHTML = "";
        },5000);
          error = error + 1;
      } else {
          document.getElementById('zip-error').innerHTML = '';
      }
      
      return error;
}

function validateAmount(amount) {
    var error = "0";
    var stripped = amount.value.replace(/[\(\)\.\-\ ]/g, '');

    if (amount.value == "") {
        document.getElementById('amount-error').innerHTML = "Please enter a donation amount";
        amount.style.outline = "2px solid #ff9f9f";
        setTimeout(function(){
            amount.style.outline = "";
            document.getElementById('amount-error').innerHTML = "";
        },5000);
        error = error + 1;
    } else if (isNaN(parseInt(stripped))) {
      error = error + 1;
        document.getElementById('amount-error').innerHTML = "The amount value contains illegal characters.";
        amount.style.outline = "2px solid #ff9f9f";
        setTimeout(function(){
            amount.style.outline = "";
            document.getElementById('amount-error').innerHTML = "";
        },5000);
    } else if (amount.value<1) {
      error = error + 1;
        document.getElementById('amount-error').innerHTML = "Minimum Donation amount is 1";
        amount.style.outline = "2px solid #ff9f9f";
        setTimeout(function(){
            amount.style.outline = "";
            document.getElementById('amount-error').innerHTML = "";
        },5000);
    } else if (amount.value>500000){
        error = error + 1;
          document.getElementById('amount-error').innerHTML = "Maximum Donation amount is 5,00,000";
          amount.style.outline = "2px solid #ff9f9f";
          setTimeout(function(){
              amount.style.outline = "";
              document.getElementById('amount-error').innerHTML = "";
          },5000);
      } else {
        amount.style.outline = '0';
        document.getElementById('amount-error').innerHTML = '';
    }
    
    return error;
}

function firebasePush(name,email,phone,address,city,state,zip,amount,dateTime,payId) {
    //push itself
    donationRef.collection("Donations").doc().set({
        name:name,
        email:email,
        phone:phone,
        address:address,
        city:city,
        state:state,
        zip:zip,
        amount:amount,
        dateTime:dateTime,
        payId:payId
    })
  }
