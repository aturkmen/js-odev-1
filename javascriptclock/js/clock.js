// Get and print name
let fullName = prompt("Adınızı giriniz");
document.querySelector("#myName").innerHTML = fullName;

// show time
function showTime() {
    let date = new Date();
    let hour = TwoDigits(date.getHours());
    let minute = TwoDigits(date.getMinutes());
    let seceond = TwoDigits(date.getSeconds());
    const DAYS = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = DAYS[date.getDay()];

    document.querySelector("#myClock").innerHTML = `${hour}:${minute}:${seceond} ${day}`;
    
    // update the clock
    setTimeout(showTime, 1000);
}

// format two digit
function TwoDigits(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}