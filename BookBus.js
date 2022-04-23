window.addEventListener("load", addListeners);

function validate() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;



    if (name == "") {
        alert("Name is Required");
        name.focus();
        return false;
    } else if (email == "") {
        alert("email is Required");
        email.focus();
        return false;
    } else if (mobile == "") {
        alert("Mobile Number is Required");
        mobile.focus();
        return false;
    } else if (adults == "") {
        alert("Please, ention the number of Adults");
        adults.focus();
        return false;
    } else if (children == "") {
        alert("Please, Mention the number of Chidren");
        children.focus();
        return false;
    } else {
        alert("Ticket Booked!!!");
    }


    return false;
}