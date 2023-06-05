// document.querySelector("button").addEventListener("click", Submit);
document.getElementById("op3").addEventListener("click", Deb_Cred);
document.getElementById("op4").addEventListener("click", Payment);

// <------------- JS For Show More Offer--------------->
const Readmorebtn=document.querySelector(".show_more_btn");
const text=document.querySelector(".Text");

Readmorebtn.addEventListener("click",(e)=>{
    text.classList.toggle("Show_more")
    if( Readmorebtn.textContent=="Show More")
    {
        Readmorebtn.textContent="Show Less"
    }
    else{
        Readmorebtn.textContent="Show More"
    }
});
// <------------


// <--- Pay Through Credit/Debit Card--->
function Deb_Cred() {
  event.preventDefault();

  var T_Div = document.createElement("div");
  T_Div.setAttribute("class", "T_Div");

  var h = document.createElement("h2");
  h.textContent = "CREDIT/DEBIT CARD";
  h.style.margin = "0px 0px 5px 10px";

  var P = document.createElement("p");
  P.style.margin = "0px 0px 5px 10px";
  P.textContent =
    "Please ensure your card can be used for online transactions.";

  T_Div.append(h, P);

  var form = document.createElement("form");
  form.setAttribute("id", "Pay_form");
 

  var CN = document.createElement("input");
  CN.setAttribute("type", "text");
  CN.setAttribute("placeholder", "Card Number");
  CN.setAttribute("id", "C_N");
  CN.setAttribute("maxlength", "16");
  CN.required=true;


  var Name = document.createElement("input");
  Name.setAttribute("id", "Name_Card");
  Name.setAttribute("type", "text");
  Name.setAttribute("placeholder", "Name On Card");
  Name.required=true;

  var Div = document.createElement("div");
  var Val = document.createElement("input");
  Val.setAttribute("placeholder", "Valid Thru(MM/YY)");
  Val.setAttribute("id", "Set_Date");
  Val.setAttribute("type", "month");
  Val.setAttribute("id", "start");
  Val.setAttribute("name", "start");
  Val.setAttribute("min", "2018-03");
  Val.setAttribute("value", "2035-05");
  Val.required=true;

  Val.style.width = "290px";
  Val.style.fontFamily = " sans-serif";

  var CVV = document.createElement("input");
  CVV.setAttribute("id", "cvv");
  CVV.setAttribute("type", "text");
  CVV.setAttribute("placeholder", "CVV");
  CVV.setAttribute("maxlength", "3");
  CVV.style.width = "150px";
  CVV.required=true;

  Div.append(Val, CVV);

  var btn = document.createElement("button");

  btn.setAttribute("class", "Pay_Now");
  btn.setAttribute("type", "submit");
  btn.textContent = "PAY NOW";
  btn.addEventListener("click", function () {
    Inp_Fill();
  });
  btn.addEventListener("click", function () {
    Pay_Now(4);
  });
  form.append(CN, Name, Div, btn);
  document.getElementById("Slt_Pay").append(T_Div, form);
}

// <--- Generate OTP Functionallity here--->
// <--- OTP Submition Form--->
function Pay_Now(X) {
  event.preventDefault();
  var otp = "";
  for (var i = 0; i < X; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  var OTP = Number(otp);

  // <-------------  Pop_up Functionallity ------------->

  var PUP1 = document.createElement("div");
  PUP1.setAttribute("id", "PUP1");

  var btn = document.createElement("button");
  btn.textContent = "X";
  btn.addEventListener("click", Hidden);
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "btn");
  var P = document.createElement("p");
  P.textContent = "OTP is sent to Your Mobile Number";

  var Otp = document.createElement("p");
  Otp.textContent = "OTP:-" + " " + Number(otp);

  PUP1.append(btn, P, Otp);
  document.querySelector("#Pop_up").append(PUP1);

  // <---------- Pop Functionality End Here------------->

  // <-- Generate OTP-->
  var H = document.createElement("h2");
  H.textContent = "Verify OTP";
  H.style.paddingTop = "25px";
  var form = document.createElement("form");
  form.setAttribute("id", "OTP_Form");

  var Div = document.createElement("div");

  var In1 = document.createElement("input");
  In1.setAttribute("id", "In1");

  var In2 = document.createElement("input");
  In2.setAttribute("id", "In2");

  var In3 = document.createElement("input");
  In3.setAttribute("id", "In3");

  var In4 = document.createElement("input");
  In4.setAttribute("id", "In4");

  Div.append(In1, In2, In3, In4);

  var btn = document.createElement("button");
  btn.setAttribute("id", "BTN");
  btn.setAttribute("type", "submit");
  btn.textContent = "SUBMIT";
  //   <--Submit OTP Event We Are sending parameter otp string for compaire--->
  btn.addEventListener("click", function () {
    Verify_OTP(otp);
  });

  btn.addEventListener("click", Total_Pri);

  form.append(H, Div, btn);
  document.getElementById("Slt_Pay").append(form);

  var Card_No = document.getElementById("C_N").value;
  var Ca_Name = document.getElementById("Name_Card").value;
  var date = document.getElementById("Set_Date").value;
  var CVV = document.getElementById("cvv").value;
  if (Card_No == "" || Ca_Name == "" || date == "" || CVV == "") {
    alert("input");
  }

  // <------- Display None Credit Card Form------->
  var FORM = document.getElementById("Slt_Pay");
  FORM.style.display = "None";
}
// <----------------------------End---------------------->

// <--------------- Submit OTP--------------->

function Verify_OTP(otp) {
  event.preventDefault();

  var St = "";
  var OT1 = document.getElementById("In1").value;
  var OT2 = document.getElementById("In2").value;
  var OT3 = document.getElementById("In3").value;
  var OT4 = document.getElementById("In4").value;
  St = OT1 + OT2 + OT3 + OT4;
  console.log(St);

  // <-------- Order Is SuccessFully Completed--------->
  if (St === otp) {
    var Land_Page = document.createElement("img");
    Land_Page.setAttribute(
      "src",
      "https://magecomp.com/blog/wp-content/uploads/2017/10/How-to-Send-Order-Confirmation-Email-to-Customers-after-Successful-Payment-in-Magento-2.png"
    );
    Land_Page.style.width = "100%";
    document.getElementById("Show").append(Land_Page);

    var PAY = document.getElementById("P");
    PAY.style.color = "green";
    var Pay = document.getElementById("Succ");
    Pay.style.display = "None";
  } else {
    // <------ If OTP is InCorrect then throw Alert Msg-------------->
    var PUP2 = document.createElement("div");
    PUP2.setAttribute("id", "PUP2");

    var btn = document.createElement("button");
    btn.textContent = "X";
    btn.addEventListener("click", ReOTP);
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn");
    var P = document.createElement("p");
    P.textContent = "You have entered wrong code.Please try again";

    PUP2.append(btn, P);
    document.querySelector("#Pop_up").append(PUP2);
  }
}
// <---------------- End -------------->

// <--- Pay Through Phone Pay Google Pay Bhim UPI--->
function Payment() {
  event.preventDefault();

  var H = document.createElement("h3");
  H.textContent = "PhonePe/Google Pay/ BHIM UPI";

  var form = document.createElement("form");
  form.setAttribute("id", "Online");

  var DIV1 = document.createElement("div");
  var x1 = document.createElement("INPUT");
  x1.setAttribute("type", "radio");

  var img1 = document.createElement("img");
  img1.setAttribute(
    "src",
    "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/phonepe-logo-icon.svg"
  );

  DIV1.append(x1, img1);

  var div1 = document.createElement("div");

  var P1 = document.createElement("p");
  P1.textContent = "Pay Through";
  div1.append(DIV1, P1);
  // <----------------------End?

  var DIV2 = document.createElement("div");
  var x2 = document.createElement("INPUT");
  x2.setAttribute("type", "radio");

  var img2 = document.createElement("img");
  img2.setAttribute(
    "src",
    "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-pay-icon.svg"
  );

  DIV2.append(x2, img2);
  var div2 = document.createElement("div");
  var P2 = document.createElement("p");
  P2.textContent = "Pay Through";

  div2.append(DIV2, P2);
  // <----------------------End?

  var DIV3 = document.createElement("div");
  var x3 = document.createElement("INPUT");
  x3.setAttribute("type", "radio");

  var img3 = document.createElement("img");
  img3.setAttribute(
    "src",
    "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/upi-payment-icon.svg"
  );

  DIV3.append(x3, img3);
  var div3 = document.createElement("div");

  var P3 = document.createElement("p");
  P3.textContent = "Pay Through";
  div3.append(DIV3, P3);

  // <----------------------End?

  form.append(H, div1, div2, div3);
  document.getElementById("Slt_Pay").append(form);
}





// <------ For Close the tab when OTP is check------------------>
function Hidden() {
  var Hide = document.getElementById("PUP1");
  Hide.style.visibility = "hidden";
}

// <------ For Close the tab when OTP is Wrong------------------>
function ReOTP() {
  var Hide = document.getElementById("PUP2");
  Hide.style.visibility = "hidden";
}

function Show_Gift(){
  event.preventDefault()
  var DIV=document.createElement("div")
  DIV.setAttribute("id","Show_gift");
  DIV.style.visibility="visible"

  var DIV1=document.createElement("div")
  var H=document.createElement("h3");
  H.textContent="Apply Gift Card";

  var H2=document.createElement("h5");
  H2.textContent="Gift card value will be added to your Myntra Credit";

  var INP1=document.createElement("input");
  INP1.setAttribute("type","text")
  INP1.setAttribute("placeholder","16 Digit Gift Card Number");


  var INP2=document.createElement("input");
  INP2.setAttribute("type","text")
  INP2.setAttribute("placeholder","6 Digit Gift Card Pin");

  var BTN=document.createElement("button");
  BTN.textContent="ADD TO MYNTRA CREDIT"
  // BTN.addEventListener("click",Hide_Gift);

  DIV.append(H,H2,INP1,INP2,BTN)

  document.getElementById("Gift_Show").append(DIV);

  var Body=document.querySelector("*")
  Body.style.background="#8f8e8e";
  Body.style.border="#8f8e8e"

  var Opt=document.getElementById("Pay_opt");
  Opt.style.background="#8f8e8e";

}


// function Hide_Gift{
//   event.preventDefault();
//   var Hide=document.getElementById("Show_gift");
//   Hide.style.visibility="Hidden"
// }


// <--- Calculate the Total Product Price --->


let Price_arr = JSON.parse(localStorage.getItem("wishlistGo"))||[]

Total_Pri(Price_arr)

function Total_Pri(Arr) {
  let Total=Arr.reduce(function(acc,elm){
     return acc+(+elm.MP);
  },0)
  document.getElementById("TP").textContent = Total;

  let FP=Arr.reduce(function(acc,elm){
    return acc+(+elm.price);
 },0)

 document.getElementById("Final_Pri").textContent = FP;

 document.getElementById("DP").textContent = Total-FP;
}
console.log(Total);