const form = document.querySelector('form');
const emailInput = form.email;
const passwordInput = form.password;

form.addEventListener('submit', function(event){
    event.preventDefault()
    if(!emailInput.value || !passwordInput.value){
        window.alert("Required Field cannot be empty")
        return false;
    }
    if(passwordInput.value.length<8){
        window.alert("Password should be atleast 8 chracters");
        return false;
    }
    const sussful=document.getElementById('successfuly');
    sussful.innerHTML="you are succfully log in"
    console.log("Logged in successfuly")
})
