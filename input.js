function processMark() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    var price = Number(document.getElementById('markBox').value);
    console.log(price)

    if (price >= 50) {
        var newDiv = document.getElementById('markContainer')
        newDiv.innerHTML = `<h1>Dear ${firstName} ${lastName}, go for Persian kittens.</h1>
        <img src="/images/pers1.webp" alt="">`
    } else if (price <= 50 && price >= 20) {
        var newDiv = document.getElementById('markContainer')
        newDiv.innerHTML = `<h1>Dear ${firstName} ${lastName}, Desi cats are best for you.</h1>
        <img src="/images/desi1.webp" alt="">`
    } else {
        var newDiv = document.getElementById('markContainer')
        newDiv.innerHTML = `<h1>Better save up for some feline fun.</h1>
        <img src="/images/nomoney.jpg" alt="">`
    }

    document.getElementById('fname').value = ""
    document.getElementById('lname').value = ""
    document.getElementById('markBox').value = ""
}

function disappear() {
    document.getElementById('markContainer').textContent = ""
}