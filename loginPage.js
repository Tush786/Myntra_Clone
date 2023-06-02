document.querySelector("#btn").addEventListener("click", myAcc)

    var accArr = JSON.parse(localStorage.getItem("number"))||[]

    function myAcc() {
        event.preventDefault()
        var accObj = {
            num: document.querySelector("#phone").value
        }

        accArr.push(accObj)
        
        localStorage.setItem("number", JSON.stringify(accArr))

        window.location.href = "loginOtp.html"

        document.querySelector("#phone").value = ""
        
    }