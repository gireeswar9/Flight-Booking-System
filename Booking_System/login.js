openloginPage = function(){
    if(document.getElementById('uname').value === 'giri' && document.getElementById('password').value=== '12345'){
        window.open("loginpage2.html")
    }
    else if(document.getElementById('uname').value === 'eswar' && document.getElementById('password').value=== '12345'){
        window.open("loginpage3.html")
    }
    else{
        alert("Wrong Credentials !!!")
    }
    
}