let menu = document.querySelector("#menu-bar");

let navbar = document.querySelector(".navbar");
// 按下按鈕產生的變化
menu.onclick = () => {
    // 當menu被按下去的時候會跑toggle這程式同時他會+active進去
    //active就會套用那個css
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}