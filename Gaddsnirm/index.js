const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


function handleButtonClick() {
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").innerText = "Förfrågan skickades!";

    setTimeout(function () {
        document.getElementById("btn").disabled = false;
        location.reload();
    }, 1000);
}

document.getElementById("btn").addEventListener('click', handleButtonClick);


function calculatePrice() {

    var width = parseFloat(document.getElementById("width").value);
    var height = parseFloat(document.getElementById("height").value);


    if (isNaN(width) || width < 0 || isNaN(height) || height < 0) {
        alert("Vänligen lämna mått för både höjd och bredd.");
        return;
    }

    var pricePerCM = 20;
    var totalArea = width + height;
    var totalPrice = totalArea * pricePerCM + 1000;


    document.getElementById("result").innerText = "Pris:" + totalPrice.toFixed(2) + "kr";
}








