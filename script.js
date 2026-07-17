const title = document.getElementById("title");
const text = document.getElementById("text");
const image = document.getElementById("image");

function showImage(src) {
    image.src = src;
    image.style.display = "block";
}

function showSpring() {
    document.body.style.background = "#90EE90";
    title.innerHTML = "Весна";
    text.innerHTML =
    "Весна — пора пробудження природи. Квіти розквітають, а дерева вкриваються зеленим листям.";
    showImage("images/spring.jpg");
}

function showSummer() {
    document.body.style.background = "#87CEEB";
    title.innerHTML = "Літо";
    text.innerHTML =
    "Літо — найтепліша пора року. Світить сонце, достигають ягоди та можна купатися.";
    showImage("images/summer.jpg");
}

function showAutumn() {
    document.body.style.background = "#D98C3F";
    title.innerHTML = "Осінь";
    text.innerHTML =
    "Осінь приносить прохолоду. Листя стає жовтим, помаранчевим і червоним.";
    showImage("images/autumn.jpg");
}


function showWinter() {
    document.body.style.background = "#DCEEFF";
    title.innerHTML = "Зима";
    text.innerHTML =
    "Зима — холодна пора року. Випадає сніг, а діти люблять кататися на санчатах.";
    showImage("images/winter.jpg");
}
