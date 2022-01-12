var myDate = new Date();
var username = "Товарищ Sevensuii";

function helloMyFriend(){
    let greeter = document.querySelector("#greeter");
    if ((myDate.getHours() >= 7) && (myDate.getHours() < 13)){
        greeter.innerHTML = "Good morning, " + username;
    }
    else if ((myDate.getHours() >= 13) && (myDate.getHours() < 19)){
        greeter.innerHTML = "Good afternoon, " + username;
    }
    else{
        greeter.innerHTML = "Good evening, " + username;
    }
}