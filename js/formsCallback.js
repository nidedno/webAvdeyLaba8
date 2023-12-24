function checkAddress() {
    var address = document.getElementById("address");
    var regex = /^[a-zA-Z\s\.\,\d\ ]{5,50}$/;

    if (regex.test(address.value)) {
        address.style.color = "green";
        address.classList.remove("red");
        return true;
    }
    else {
        address.style.color = "red";
        address.classList.add("red");
        return false;
    }
}


function checkPhone() {
    var phone = document.getElementById("phone");
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone.value)) {
        phone.style.color = "green";
        phone.classList.remove("red");
        return true;
    }
    else {
        phone.style.color = "red";
        phone.classList.add("red");
        return false;
    }
}

function checkProduct() {
    var product = document.getElementById("product");
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(product.value)) { // if testing of first is true
        product.style.color = "green";
        product.classList.remove("red");
        return true;
    }
    else {// if it's not
        product.style.color = "red";
        product.classList.add("red");
        return false;
    }
}

function hideRights()
{
    var rights = document.getElementById("rights");
    rights.style.display = "None";
}

var isZoomed = false;
function increaseSizeOfLogo()
{
    var logo = document.getElementById("logo");
    if (isZoomed)
    {
        logo.style.width = "128px";
        logo.style.height = "44px";
    }
    else
    {
        logo.style.width = "64px";
		logo.style.height = "22px";
    }

    isZoomed = !isZoomed
}