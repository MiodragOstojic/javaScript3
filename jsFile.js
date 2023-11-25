// Pozadina
var colors = [
    "white",
    "turquoise",
    "pink",
    "purple",
];
setInterval(() => {
    let body = document.getElementsByTagName("body")[0];
    let randomNumber = parseInt(Math.random() * 10);
    body.style.backgroundColor = colors[randomNumber];
}, 1000)
// Alert Window
function klikni() {
    alert("Welcome");
}
//Text has changed
function changeText() {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "Text has Changed"
    p1.style.fontSize = "30px";
    p1.style.backgroundColor = "white";
}
//  Checkbox ispis

function checkOut() {
    var m1 = document.getElementById("male");
    var f1 = document.getElementById("female");
    var message = document.getElementById("message1")

    if (m1.checked) {
        message.innerHTML = "Male";
    }
    else if (f1.checked) {
        message.innerHTML = "Female";
    }
    else {
        message.innerHTML = "You have not selected any option";
    }
}
// New Page
function showNewPage() {

    var newPageContent = "<h1>Thank you for your time</h1> <br> <button type=\"submit\" class=\"btn btn-primary\">Back</button>";
    document.getElementById("newPage").innerHTML = newPageContent;
}
// Show Input
function showInput() {
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var animal = document.getElementById("animal").value;

    var message =  name +  "<br> " + lastName + "<br> " + animal;
    document.getElementById("message2").innerHTML = message;
}

