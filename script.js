// console.log("Hello World");
//
//
//
// // Card Number Info
// document.getElementById("save").addEventListener("click", function() {
//     var card_info = {
//       firstName: document.getElementById('fname').value,
//       lastName: document.getElementById('lname').value,
//       number: document.getElementById('card').value,
//       expiry: document.getElementById('expire').value,
//       cvc: document.getElementById('cvc').value,
//     };
//
//     console.log(card_info);
//      });
//
// // Adress Info
// document.getElementById("save").addEventListener("click", function() {
//       var order_info = {
//         adress: document.getElementById('adress').value,
//         city: document.getElementById('city').value,
//         zipcode: document.getElementById('zipcode').value,
//         email: document.getElementById('email').value,
//       };
//
//      console.log(order_info);
//       });

// Supreme autofill

var order_info = {name: "your name", // your first and last name
                  email: "your@email.com", // your email
                  phone: "5555555555", // your phone number
                  address1: "123 cook lane", // your street address
                  address2: "apartment 1", // leave blank if you dont have one
                  zipcode: "00000", // your zip code
                  city: "New York", // city
                  state_code: "NY", // state code, if you dont know this then look it up son
                  country: "USA" // only two options, "USA" or "CANADA"
                 };
var card_info = {cc_number: "xxx", // your full credit card number
                 cc_cvv: "xxx", // the 3 digit security code
                 cc_month: "04", // month of expiration, if it is 1-9 use 01, 02, 03...
                 cc_year: "2019" // year of expiration
                };




// supremenewyork find page elements and autofill

var auto_process = false; // set this to true if you want the checkout to automatically click the process payment button

(function() {
    'use strict';

    // checkout automation
    if (document.location == "https://www.supremenewyork.com/checkout") {
        // billing/shipping information
        document.getElementsByName("order[billing_name]")[0].value = order_info.name;
        document.getElementsByName("order[email]")[0].value = order_info.email;
        document.getElementsByName("order[tel]")[0].value = order_info.phone;
        document.getElementsByName("order[billing_address]")[0].value = order_info.address;
        document.getElementsByName("order[billing_zip]")[0].value = order_info.zipcode;
        document.getElementsByName("order[billing_city]")[0].value = order_info.city;

        // credit card information
        document.getElementsByName("credit_card[cnb]")[0].value = card_info.card;
        document.getElementsByName("credit_card[vval]")[0].value = card_info.cvc;
        document.getElementsByName("credit_card[month]")[0].value = card_info.expire;

        // accept terms
        $('div.icheckbox_minimal').iCheck('check');

        // complete
        if (auto_process)
            document.getElementsByClassName("button checkout")[0].click();
    }

    // shop redirect
    if (document.location == "http://www.supremenewyork.com/shop")
        document.location = "http://www.supremenewyork.com/shop/all";
})();
