// document.getElementById("Submit").addEventListener("click",Submit_Add);

// <-------------- Add Address in Container----------------->
var Arr_Add = JSON.parse(localStorage.getItem("Address")) || [];
Display_Add(Arr_Add);
function Submit_Add() {
  event.preventDefault();
  var Name = document.getElementById("name").value;
  var M_No = document.getElementById("number").value;
  var Pin = document.getElementById("Pin").value;
  var Add = document.getElementById("Address").value;
  var Town = document.getElementById("Town").value;
  var City = document.getElementById("City").value;
  var State = document.getElementById("State").value;
  if (
    Name == "" ||
    M_No == "" ||
    Pin == "" ||
    Add == "" ||
    Town == "" ||
    City == "" ||
    State == ""
  ) {
    alert("Fill All input value");
    return;
  }

  var obj = {
    Name: Name,
    M_No: M_No,
    Pin: Pin,
    Add: Add,
    Town: Town,
    City: City,
    State: State,
  };

  console.log(obj);
  Arr_Add.push(obj);
  localStorage.setItem("Address", JSON.stringify(Arr_Add));
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("Pin").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Town").value = "";
  document.getElementById("City").value = "";
  document.getElementById("State").value = "";
}

function Display_Add(Arr) {
  document.getElementById("A").textContent=""
  Arr.map(function (el, i) {
    var Main_Div = document.createElement("div");
    Main_Div.setAttribute("id", "Sub_Cont");

    var H1 = document.createElement("h3");
    H1.textContent = el.Name;
    H1.style.fontWeight = "800";
    H1.style.color = "Black";
    H1.style.marginLeft = "0px";
    console.log(H1);

    var P = document.createElement("p");
    P.textContent = el.Add + "," + el.City + "," + el.State + "," + el.Pin;

    var No = document.createElement("p");
   
    No.textContent = "Mobile:-" + el.M_No;

    var Pay_opt = document.createElement("p");
    Pay_opt.textContent = "Pay On Delivery available";

    var Rem = document.createElement("button");
    Rem.textContent = "REMOVE";
    Rem.addEventListener("click", function () {
      Del(el, i);
    });

    var Edit = document.createElement("button");
    Edit.textContent = "EDIT";

    Main_Div.append(H1, P, No, Pay_opt, Rem, Edit);
    document.getElementById("A").append(Main_Div);

    //    <-------- Display None-------->
    var ADD = document.getElementById("Add");
    ADD.style.display = "None";
  });

  var Top = document.getElementById("Top");
  Top.style.border = "none";
}

function Del(elm, i) {
  Arr_Add.splice(i, 1);
  localStorage.setItem("Address", JSON.stringify(Arr_Add));
  Display_Add(Arr_Add);
  var ADD = document.getElementById("Add");
  ADD.style.display = "visible";
}
