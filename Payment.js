// document.querySelector("button").addEventListener("click", Submit);
document.getElementById("op3").addEventListener("click", Deb_Cred);
document.getElementById("op4").addEventListener("click", Payment);

// <--- Pay Through Credit/Debit Card--->
function Deb_Cred() {
  event.preventDefault();

  var ID = document.getElementById("op3");
  ID.style.background = "white";
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

  var Name = document.createElement("input");
  Name.setAttribute("id", "Name_Card");
  Name.setAttribute("type", "text");
  Name.setAttribute("placeholder", "Name On Card");

  var Div = document.createElement("div");
  var Val = document.createElement("input");
  Val.setAttribute("placeholder", "Valid Thru(MM/YY)");
  Val.setAttribute("id", "Set_Date");
  Val.setAttribute("type", "month");
  Val.setAttribute("id", "start");
  Val.setAttribute("name", "start");
  Val.setAttribute("min", "2018-03");
  Val.setAttribute("value", "2035-05");

  Val.style.width = "270px";
  Val.style.fontFamily = " sans-serif";

  var CVV = document.createElement("input");
  CVV.setAttribute("id", "cvv");
  CVV.setAttribute("type", "text");
  CVV.setAttribute("placeholder", "CVV");
  CVV.setAttribute("maxlength", "3");
  CVV.style.width = "110px";

  Div.append(Val, CVV);

  var btn = document.createElement("button");

  btn.setAttribute("class", "Pay_Now");
  btn.setAttribute("type", "submit");
  btn.textContent = "PAY NOW";
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
  if (Card_No == "" || Ca_Name == "" || date == "" || CVV == "") {
    alert("Fill Field");
  } else {
    alert("OTP:-" + OTP);
  }
  // <-- Generate OTP-->

  var H = document.createElement("h2");
  H.textContent = "Enter OTP";
  H.style.paddingTop = "25px";
  var form = document.createElement("form");
  form.setAttribute("id", "OTP_Form");

  var Div = document.createElement("div");

  var In1 = document.createElement("input");
  In1.setAttribute("id", "In1");
  In1.setAttribute("type", "text");

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
// <----End---->

// <--- Submit OTP--->

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
    var Pay = document.getElementById("Succ");
    Pay.style.display = "None";
  } else {
    alert("Please Check OTP");
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

// <--- Calculate the Total Product Price --->

var Arr = [
  { Pro_Nam: "Shoes", Price: 2300 },
  { Pro_Nam: "Shoes", Price: 2460 },
  { Pro_Nam: "Shoes", Price: 5403 },
  { Pro_Nam: "Shoes", Price: 5400 },
];

localStorage.setItem("Price", JSON.stringify(Arr));
// var Arr_CCode=["Masai20","Bounty10","Masai15","Masai30"]
var Arr_CCode = ["Masai20", "Bounty101", "Masai151", "Masai301"];

var Total = 0;
function Total_Pri() {
  Arr.map(function (el) {
    Total += +el.Price;
  });
  // console.log(Total)

  document.getElementById("TP").textContent = Total;

  var X = 0;
  Arr_CCode.map(function (elm) {
    if (elm === "Masai20") {
      X = Total * 0.2;
    } else if (elm === "Bounty10") {
      X = Total * 0.1;
    } else if (elm === "Masai15") {
      X = Total * 0.15;
    } else if (elm === "Massai30") {
      X = Total * 0.3;
    }

    var DP = (document.getElementById("DP").textContent = Total - X);

    if (DP > 999) {
      document.getElementById("Final_Pri").textContent = DP - 99;
    }
  });
}
