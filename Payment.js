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
  CN.setAttribute("id", "C_N");
 

  var Name = document.createElement("input");
  Name.setAttribute("type", "text");
  Name.setAttribute("placeholder", "Name On Card");

  var Div = document.createElement("div");
  var Val = document.createElement("input");
  Val.setAttribute("placeholder", "Valid Thru(MM/YY)");
  Val.setAttribute("type", "month");
  Val.setAttribute("id","start")
  Val.setAttribute("name","start")
  Val.setAttribute("min","2018-03")
  Val.setAttribute("value","2018-05")
 
  Val.style.width = "270px";
  Val.style.fontFamily = " sans-serif";

  var CVV = document.createElement("input");
  CVV.setAttribute("class", "cvv");
  CVV.setAttribute("type", "number");
  CVV.setAttribute("placeholder", "CVV");
  CVV.style.width = "110px";

  Div.append(Val, CVV);

  var btn = document.createElement("input");
 
  btn.setAttribute("class","Pay_Now")
  btn.setAttribute("type", "submit");
  btn.textContent="PAY NOW"
  btn.addEventListener("click",function(){
    Pay_Now(6);
  })

  form.append(CN, Name, Div, btn);
  document.getElementById("Slt_Pay").append(T_Div, form);
}

// <--- Generate OTP Functionallity here--->
// <--- OTP Submition Form--->
function Pay_Now(X) {
    event.preventDefault()
   var otp=""
    for(var i=0;i<X;i++){
       otp+=Math.floor(Math.random()*10);
    }
    var OTP=Number(otp);
    alert("OTP:-"+OTP);
    // <-- Generate OTP-->


    var H=document.createElement("h2");
    H.textContent="Enter OTP"
    var form=document.createElement("form");
    form.setAttribute("id","OTP_Form")

    var Div=document.createElement("div")

    var In1=document.createElement("input");
    // In1.setAttribute("type","number");

    var In2=document.createElement("input");
    // In2.setAttribute("type","number");

    var In3=document.createElement("input");
    // In3.setAttribute("type","number");

    var In4=document.createElement("input");
    // In4.setAttribute("type","number");

    var In5=document.createElement("input");
    // In5.setAttribute("type","number");

    var In6=document.createElement("input");
    // In6.setAttribute("type","number");

    Div.append(In1,In2,In3,In4,In5,In6)

    var btn=document.createElement("button");
    btn.setAttribute("class","btn")
    btn.setAttribute("type","submit");
    btn.textContent="SUBMIT"


    form.append(H,Div,btn);
    document.getElementById("Slt_Pay").append(form)
}
// <----End---->




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


// <--- Calculate the Total Product Price --->


