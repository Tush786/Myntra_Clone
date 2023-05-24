document.querySelector("button").addEventListener("click", Submit);
document.getElementById("Pay_opt").addEventListener("click", Deb_Cred);
document.getElementById("Pay_opt").addEventListener("click", Payment);

// <--- Pay Through Credit/Debit Card--->
function Deb_Cred() {
  event.preventDefault();
  var T_Div = document.createElement("div");
  T_Div.setAttribute("class", "T_Div");

  var h = document.createElement("h2");
  h.textContent = "CREDIT/DEBIT CARD";
  h.style.padding = "0px 0px 5px";

  var P = document.createElement("p");
  P.textContent =
    "Please ensure your card can be used for online transactions.";

  T_Div.append(h, P);

  var form = document.createElement("form");
  form.setAttribute("id", "Pay_form");

  var CN = document.createElement("input");
  CN.setAttribute("type", "number");
  CN.setAttribute("placeholder", "Card Number");

  var Name = document.createElement("input");
  Name.setAttribute("type", "text");
  Name.setAttribute("placeholder", "Name On Card");

  var Div = document.createElement("div");
  var Val = document.createElement("input");
  Val.setAttribute("type", "date");
  Val.setAttribute("placeholder", "Valid Thru(MM/YY)");
  Val.style.width = "210px";

  var CVV = document.createElement("input");
  CVV.setAttribute("type", "number");
  CVV.setAttribute("placeholder", "CVV");
  CVV.style.width = "105px";

  Div.append(Val, CVV);

  var btn = document.createElement("input");
  btn.setAttribute("type", "submit");

  form.append(CN, Name, Div, btn);
  document.getElementById("Slt_Pay").append(T_Div, form);
}

// <--- Pay Through Phone Pay Google Pay Bhim UPI--->
function Payment() {
  event.preventDefault();
  var form = document.createElement("form");

  var div1 = document.createElement("div");

  var x1 = document.createElement("INPUT");
  x1.setAttribute("type", "radio");

  var img1 = document.createElement("img");
  img1.setAttribute(
    "src",
    "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/phonepe-logo-icon.svg"
  );

  var P1 = document.createElement("p");
  P1.textContent = "Pay Through";

  div1.append(x1, img1, P1);

  var div2 = document.createElement("div");

  var x2 = document.createElement("INPUT");
  x2.setAttribute("type", "radio");

  var img2 = document.createElement("img");
  img2.setAttribute(
    "src",
    "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-pay-icon.svg"
  );

  var P2 = document.createElement("p");
  P2.textContent = "Pay Through";

  div2.append(x2, img2, P2);

  var div3 = document.createElement("div");

  var x3 = document.createElement("INPUT");
  x3.setAttribute("type", "radio");

  var img3 = document.createElement("img");
  img3.setAttribute(
    "src",
    "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/upi-payment-icon.svg"
  );

  var P3 = document.createElement("p");
  P3.textContent = "Pay Through";

  div3.append(x3, img3, P3);

  var btn = document.createElement("input");
  btn.setAttribute("type", "submit");
  btn.style.backgroundColor = "";

  form.append(div1, div2, div3, btn);
  document.getElementById("Slt_Pay").append(form);
}
