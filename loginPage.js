document.querySelector("#btn").addEventListener("click", myAccount)

    var accArr = JSON.parse(localStorage.getItem("number"))||[]

    function myAccount() {
        event.preventDefault()
        
        var accObj = {
            num: document.querySelector("#phone").value 
        } 

        if(accObj.num.length === 10){
            accArr.push(accObj)
        
            localStorage.setItem("number", JSON.stringify(accArr))

            window.location.href = "loginOtp.html"
        }else{
            document.querySelector("#numDetail").textContent = "Please enter a valid mobile number(10 digits)"
        }

        document.querySelector("#phone").value = ""
        
    }