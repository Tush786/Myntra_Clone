let jugadFp;
let jugadMrp;

// let products = [
//   {
//     name: "FUBAR",
//     type: "Tartan Checked Spread Collar Cotton Casual Shirt",
//     seller: "sold by:Vision star",
//     size: "M",
//     MRP: 1499,
//     discount: 75,
//     Finalprice: 374,
//     image:
//       "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22913888/2023/4/27/e27bafeb-eca1-4d3a-b41f-44301e1891a91682565216782FUBARMenMulticolouredSlimFitTartanChecksOpaqueCheckedCasualS1.jpg",
//   }
//   ,
//   {
//     name: "FUBAR",
//     type: "Tartan Checked Spread Collar Cotton Casual Shirt",
//     seller: "sold by:Vision star",
//     size: "M",
//     MRP: 1499,
//     discount: 75,
//     Finalprice: 374,
//     image:
//       "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22913888/2023/4/27/e27bafeb-eca1-4d3a-b41f-44301e1891a91682565216782FUBARMenMulticolouredSlimFitTartanChecksOpaqueCheckedCasualS1.jpg",
//   }
// ];

// let products = JSON.parse(localStorage.getItem("cartGo"))||[]
let products = JSON.parse(localStorage.getItem("wishlistGo"))||[]

 console.log(products);

if (products.length === 0) {
  displayEmpty();
} else {
  displayData();
  calculatesum();
}

function displayEmpty() {
  let body = document.querySelector(".main");
  body.style.display = "none";

  let footer = document.querySelector(".footer");
  footer.style.display = "none";

  let img = document.createElement("img");
  img.setAttribute("src", "emptyCart.png");
  img.setAttribute("alt", "addSomething");
  img.style.display = "block";
  img.style.margin = "auto";

  img.style.width = "180vh";

  let mainBody = document.querySelector("body");
  mainBody.append(img);
}

function displayData() {
  products.map(function (ele, i) {
    let div1 = document.createElement("div");
    div1.setAttribute("class", "item");

    let proimg = document.createElement("img");
    proimg.setAttribute("id", "img");
    proimg.setAttribute("alt", "item");
    proimg.setAttribute("src", ele.image);

    let div2 = document.createElement("div");
    div2.style.lineHeight = "13px";

    let name = document.createElement("h4");
    name.style.marginTop = "12px";
    name.setAttribute("id", "name");
    console.log(name);
    // name.textContent = ele.name;
    name.textContent = ele.brand;
    

    let type = document.createElement("p");
    type.setAttribute("id", "type");
    type.style.marginTop = "-5px";
    type.textContent = ele.type;

    let seller = document.createElement("span");
    seller.setAttribute("class", "seller");
    // seller.textContent = ele.seller;
    seller.textContent = "sold by:Vision star";


    let div3 = document.createElement("div");
    div3.style.display = "flex";





    let size = document.createElement("select")
    size.setAttribute("class", "Size");
    let size1 = document.createElement("option");
    size1.value = "1";
    size1.text = "Size: S";

    let size2 = document.createElement("option");
    size2.value = "2";
    size2.text = "Size: M"; 

    let size3 = document.createElement("option");
    size3.value = "3";
    size3.text = "Size: L";

    let size4 = document.createElement("option");
    size4.value = "4";
    size4.text = "Size: XL";

    let size5 = document.createElement("option");
    size5.value = "5";
    size5.text = "Size: XXL";
   
    size.append(size1,size2,size3,size4,size5);


    let qty = document.createElement("select");
    qty.setAttribute("id", "Qty");
    qty.style.marginLeft = "20px";

    let option1 = document.createElement("option");
    option1.value = "1";
    option1.text = "Qty: 1";

    let option2 = document.createElement("option");
    option2.value = "2";
    option2.text = "Qty: 2";

    let option3 = document.createElement("option");
    option3.value = "3";
    option3.text = "Qty: 3";

    let option4 = document.createElement("option");
    option4.value = "4";
    option4.text = "Qty: 4";

    let option5 = document.createElement("option");
    option5.value = "5";
    option5.text = "Qty: 5";

    let option6 = document.createElement("option");
    option6.value = "6";
    option6.text = "Qty: 6";

    let option7 = document.createElement("option");
    option7.value = "7";
    option7.text = "Qty: 7";
    let option8 = document.createElement("option");
    option8.value = "8";
    option8.text = "Qty: 8";

    let option9 = document.createElement("option");
    option9.value = "9";
    option9.text = "Qty: 9";

    let option10 = document.createElement("option");
    option10.value = "10";
    option10.text = "Qty: 10";

    qty.append(
      option1,
      option2,
      option3,
      option4,
      option5,
      option6,
      option7,
      option8,
      option9,
      option10
    );

    div3.append(size, qty);

    let div4 = document.createElement("div");
    div4.style.display = "flex";
    div4.style.marginTop = "-15px";

    let p = document.createElement("p");
    p.textContent = "₹ ";

    let b = document.createElement("b");
    b.style.paddingRight = "5px";

    let spanb = document.createElement("span");
    spanb.setAttribute("id", "finalprice");
    // spanb.textContent = ele.Finalprice;
    spanb.textContent = ele.price;
 

    b.append(spanb);
    p.append(b);

    let s = document.createElement("s");
    s.style.color = "rgb(159, 157, 153";
    s.textContent = "₹ ";

    let spanOfs = document.createElement("span");
    spanOfs.setAttribute("id", "MRP");
    // spanOfs.textContent = ele.MRP;
    spanOfs.textContent = ele.MP;


    s.append(spanOfs);
    p.append(s);

    let p2 = document.createElement("p");
    p2.setAttribute("id", "off");

    let spanOfp2 = document.createElement("span");
    spanOfp2.setAttribute("id", "discount");
    // spanOfp2.textContent = ele.discount + "% OFF";
    spanOfp2.textContent = ele.offer + "% OFF";


    p2.append(spanOfp2);

    let div5 = document.createElement("div");

    let returnAvlb = document.createElement("p");
    returnAvlb.style.marginTop = "5px";

    let bofR = document.createElement("b");
    bofR.textContent = "14 days return available";

    returnAvlb.append(bofR);

    div5.append(returnAvlb);

    div4.append(p, p2);

    div2.append(name, type, seller, div3, div4, div5);

    let delteItem = document.createElement("button");
    delteItem.setAttribute("id", "dlt");
    delteItem.innerHTML = "╳";
    delteItem.addEventListener("click", function () {
      deleteData(ele, i);
    });

    div1.append(proimg, div2, delteItem);

    let body = document.querySelector(".itembox");
    body.append(div1);

    let MRP2 = document.getElementById("MRP2");
    // MRP2.textContent = ele.MRP;
    MRP2.textContent = ele.MP;


    let discOnMrp = document.getElementById("discOnMrp");
    // discOnMrp.textContent = Math.round((ele.MRP / 100) * ele.discount);
    discOnMrp.textContent = Math.round((ele.MP / 100) * ele.offer);


    let finalP = document.getElementById("fp-2");
    // finalP.textContent = ele.Finalprice;
    finalP.textContent = ele.price;


    document.getElementById("items").textContent = products.length;

    qty.addEventListener("change", function () {
      // getQty(qty, ele.Finalprice, ele.MRP, ele.discount);
      getQty(qty, ele);
    });
  });
}




function deleteData(ele, i) {
  products.splice(i, 1);
  //displayData(products);
}

function getQty(qty, ele) {
  let fp = qty.value * ele.price;
  document.getElementById("finalprice").textContent = fp;
  let y = (document.getElementById("fp-2").textContent = fp + jugadFp - ele.price);

  let fmrp = qty.value * ele.MP;
  document.getElementById("MRP").textContent = fmrp;
  let x = (document.getElementById("MRP2").textContent = fmrp + jugadMrp - ele.MP);
   

     
  let fdiscount = qty.value * ele.offer;
  document.getElementById("discOnMrp").textContent = Math.round(x - y);
}


function calculatesum() {
  let totalFp = products.reduce(function (acc, curr) {
    // return acc + curr.Finalprice;
    return acc + (+curr.price);
  }, 0);

  jugadFp = document.getElementById("fp-2").textContent = totalFp;
  

  let totalMrp = products.reduce(function (acc, curr) {
    // return acc + curr.MRP;
    return acc + (+curr.MP);
  }, 0);

   jugadMrp = document.getElementById("MRP2").textContent = totalMrp;
  

}
