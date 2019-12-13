
const puppeteer = require('puppeteer');
// const info = require("./config"); (RESORT TO .config FILE if document.getelementbyID doesn't work.)







// Billing / Order Info (Change all)

var info = {
    name:"Test Name",
    email:"Test@gmail.com",
    phone:"1234567890",
    adress:"1929 Tactor Patch Road",
    zip:"60607",
    number:"1234123412341234",
    cvc:"123"
}

module.exports - info;




(async () => {


// {headless: false} to see behind the scenes

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // Product Page
  await page.goto('https://www.supremenewyork.com/shop/t-shirts/dk2lr39hm');
  document.getElementById("loadedsite").innerHTML = "Site Loaded!";
  console.log("Went to Page Successful")
  await page.click("#add-remove-buttons > a");
  document.getElementById("carted").innerHTML = "Added Item to Cart";
  console.log("Added to cart,")
  await page.waitFor(100);
  await page.click("#add-remove-buttons > a");
  document.getElementById("checkoutpage").innerHTML = "At Checkout Page";
  console.log("Entered Billing Page")
//   Interval (MS)
  await page.waitFor(200);
  document.getElementById("waitintv").innerHTML = "Waiting for Interval";
  await page.type("#order_billing_name",info.name)
  await page.type("#order_email",info.email)
  await page.type("#order_tel",info.phone)
  await page.type("#bo",info.adress);
  await page.type("#order_billing_zip",info.zip);
  document.getElementById("orderinputed").innerHTML = "Order Info Inputed";
  console.log("Order Info Inputed")
  await page.type("#rnsnckrn",info.number)
  await page.type("#orcer",info.cvc)
  await page.type("#credit_card_month","04")
  await page.type("#credit_card_year","2026")
  document.getElementById("billinginputed").innerHTML = "Billing Info Inputed";
  console.log("Billing Info Inputed")
  

// Add Submit Order
document.getElementById("cooked").innerHTML = "COOKED - Order Successfully Submited";
// Close browser if Headless is False
await browser.close();

console.log("Order Submitted. Success!!! Now closing")

})();




  // function script {

  // }
// document.getElementById(‘mylink’).addEventListener(‘click’, () => { function script });