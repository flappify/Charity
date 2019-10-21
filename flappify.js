document.getElementById('paymentclick').addEventListener('click',pay);

function pay(){
    var options = {
        "key": "rzp_test_RDEf4OFlF6k0Jw",
        "amount": 2000, // Example: 2000 paise = INR 20
        "name": "MERCHANT name",
        "description": "description",
        "image": "img/logo.png",// COMPANY LOGO
        "handler": function (response) {
            console.log(response);
            // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
        },
        "prefill": {
            "name": "ABC", // pass customer name
            "email": 'A@A.COM',// customer email
            "contact": '+919123456780' //customer phone no.
        },
        "notes": {
            "address": "address" //customer address 
        },
        "theme": {
            "color": "#A31CE3" // screen color
        }
    };
    console.log(options);
    var propay = new Razorpay(options);
    propay.open();
}