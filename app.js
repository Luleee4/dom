let users = []  ;

try {
  let data = localStorage.getItem("users");
  if(data!=null)
  users = JSON.parse(data)
} catch (err) {
  users = [];
}

console.log(users)
validateRegister();
function registracija() {
  console.log(document.getElementById("imeTxt"));
  var txtIme = document.getElementById("imeTxt").value;
  var txtUser = document.getElementById("userTxt").value;
  var txtEmail = document.getElementById("emailTxt").value;
  var txtPassword = document.getElementById("passwordTxt").value;

  var newUser = {
    ime:txtIme,
    username:txtUser,
    email:txtEmail,
    password:txtPassword
  }
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
  console.log(newUser);

  
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set("ime", txtIme);
  urlParams.set("username", txtUser);
  urlParams.set("email", txtEmail);
  window.location.href=`login.html?ime=${txtIme}&username=${txtUser}&email=${txtEmail}`;
//   window.location.href="/index.html"; //************* */
//   window.location.search = urlParams;
  
}


function validateRegister(){
  const regex = '[A-Z]+'
  document.getElementById("register-btn").disabled = true;
   if(document.getElementById("imeTxt").value!="" && document.getElementById("userTxt").value!="" && document.getElementById("emailTxt").value!="" && document.getElementById("passwordTxt").value!="" && document.getElementById("passwordTxt").value.length>6 ){
        document.getElementById("register-btn").disabled = false;
   }
}

function checkLogin(){ 
    var txtUser = document.getElementById("userTxt").value;
    var txtPassword = document.getElementById("passwordTxt").value;
    var userTriesLogin = {
        username:txtUser,
        password:txtPassword
    }
    
    var existingUsers = JSON.parse(localStorage.getItem("users"));
    console.log(existingUsers);
    var success = false;
    existingUsers.forEach(element => {
        console.log(element);
        console.log(userTriesLogin);
        if(element.username == userTriesLogin.username && 
            element.password == userTriesLogin.password) {
            success = true;
            return;
        }
        else {
          success = false;
        }
    });
    if (success) {
      alert("uspesan login");
    } else {
      alert("proveri kredencijale");
    }
}