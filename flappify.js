function pay(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var address=document.getElementById('address').value;
    var amount=document.getElementById('amount').value;
    if(amount>0 && amount!=null)
    {
        var options = {
            "key": "rzp_test_RDEf4OFlF6k0Jw",
            "amount": amount*100, // Example: 2000 paise = INR 20
            "name": "PARKLANE ASTITVA",
            "description": "Donation",
            "image": "logo/logo.png",// COMPANY LOGO
            "handler": function (response) {
                console.log("success");
                $("#payCheck").trigger("reset");
                window.location="/thankyou.html";
                // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
            },
            "prefill": {
                "name":name, // pass customer name
                "email": email,// customer email
                "contact": phone,//customer phone no.
            },
            "notes": {
                "address": address, //customer address 
            },
            "theme": {
                "color": "#A31CE3" // screen color
            }
        };
        console.log(options);
        var propay = new Razorpay(options);
        propay.open();
    }
}