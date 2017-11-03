/*function login(form) {
    var inputs = document.querySelectorAll("input");
    var userLogin = {
        email: inputs[0].value,
        pWord: inputs[1].value
    };
    if (userLogin = true) {
        console.log("Successful login");
        document.getElementsByClassName("LogIn").style.display = "none";
        document.getElementsByClassName("welcomeMessage").style.display = "flex";    /!* create this *!/
    } else {
        console.log("Login failed");
        document.getElementsByClassName("loginFailed").style.display = "flex";       /!* create this *!/
    }
}
*/


var user = {
    email: "coolguy@gmail.com",
    password: "ILoveCoffee",
    name: "Grant Chirpus"
};

function login(form) {
    var input = document.querySelectorAll("input");

    var userLogin = {
        email: input[0].value,
        password: input[1].value
    };
    console.log(input);
    document.getElementsByClassName("logIn").style.display = "none";

    if(userLogin.email == "user.email" && userLogin.password == "user.password") {
        console.log("Successful login");
        document.getElementsByClassName("logIn").style.display = "none";
        document.getElementsByClassName("welcomeMessage").style.display = "flex";    /* create this */
    }
    else
    {
        console.log("Login failed");
        alert("Sorry, email and password, do not match.  Please try again.")
    }
}





/*

function collect() {
    var inputs = document.querySelectorAll("input");
    var userObj = {
        name: inputs[0].value,
        email: inputs[1].value,
        address: inputs[2].value,
        city: inputs[3].value,
        state: inputs[4].value
    };

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";

    }
    console.log(userObj);
}

*/
