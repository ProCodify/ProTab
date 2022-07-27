var today = new Date();
var time = today.getHours();
let wish = "";
if(time>=21 && time>= 18){
    document.body.style.backgroundImage = "url('/Img/bg/8.jpeg')";
}
else if(time>= 19 && time<=21){
    document.body.style.backgroundImage = "url('/Img/bg/7.jpeg')";

}
else if(time>= 18 && time<=19){
    document.body.style.backgroundImage = "url('/Img/bg/6.jpeg')";
}
else if(time>= 15 && time<=18){
    document.body.style.backgroundImage = "url('/Img/bg/5.jpeg')";
}
else if(time>= 12 && time<=15){
    document.body.style.backgroundImage = "url('/Img/bg/4.jpeg')";
}
else if(time>= 8 && time<=12){
    document.body.style.backgroundImage = "url('/Img/bg/3.jpeg')";
}
else if(time>= 5 && time<=8){
    document.body.style.backgroundImage = "url('/Img/bg/2.jpeg')";
}
else if(time>= 0 && time<=5){
    document.body.style.backgroundImage = "url('/Img/bg/1.jpeg')";
}




function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var phase = document.getElementById("phase");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    // var am = "AM";

    if (h > 12) {
        h = h - 12;
        // var am = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    // phase.innerHTML = am;
}

var interval = setInterval(clock, 1000);