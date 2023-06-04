document.querySelector("form").addEventListener("submit", myProfile)

    var detailArr = JSON.parse(localStorage.getItem("details")) || []

    function myProfile(){
        event.preventDefault()

        var numbers = JSON.parse(localStorage.getItem("number")) 

        var detailObj = {
            numbers: numbers,
            name : document.querySelector("#name").value,
            email : document.querySelector("#email").value,
            number : document.querySelector("#mobile").value
        }

        var password = document.getElementById("password").value;
        var passwordLength = password.length;
        var hasNumeric = /\d/.test(password);
        var hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        var hasUppercase = /[A-Z]/.test(password);

        if (passwordLength === 0) {
            document.getElementById("btn1").style.border = "1px solid red";
            document.getElementById("btn2").style.border = "1px solid red";
            document.getElementById("btn3").style.border = "1px solid red";
            document.getElementById("btn4").style.border = "1px solid red";
        } else {
            document.getElementById("btn1").style.border = "none";
            if (passwordLength < 8) {
            document.getElementById("btn1").style.border = "1px solid red";
            }
            if (!hasNumeric) {
            document.getElementById("btn4").style.border = "1px solid red";
            } else {
            document.getElementById("btn4").style.border = "none";
            }
            if (!hasSpecial) {
            document.getElementById("btn2").style.border = "1px solid red";
            } else {
            document.getElementById("btn2").style.border = "none";
            }
            if (!hasUppercase) {
            document.getElementById("btn3").style.border = "1px solid red";
            } else {
            document.getElementById("btn3").style.border = "none";
            }
            if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {

                detailArr.push(detailObj)

                localStorage.setItem("details", JSON.stringify(detailArr))

                window.location.href = "home.html";
            }
        }
        
        document.querySelector("#password").value = ""
        document.querySelector("#name").value = ""
        document.querySelector("#email").value = ""
        document.querySelector("#mobile").value = ""
    }

    var mobile = JSON.parse(localStorage.getItem("number"))||[]

    // document.querySelector("#mobileNum").textContent = mobile

    displayNumber()

    function displayNumber(){
        mobile.map(function(elem){
            document.querySelector("#mobileNum").textContent = ""

            var div1 = document.createElement("div")
            div1.textContent = elem.num

            document.querySelector("#mobileNum").append(div1)
        })
    }