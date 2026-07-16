const title = document.getElementById("title");
const text = document.getElementById("text");
const image = document.getElementById("image");

function showSpring() {
    document.body.style.background = "#90EE90";
    title.innerHTML = "Весна";
    text.innerHTML =
    "Весна — пора пробудження природи. Квіти розквітають, а дерева вкриваються зеленим листям.";
    image.src = "images/spring.jpg";
}

function showSummer() {
    document.body.style.background = "#87CEEB";
    title.innerHTML = "Літо";
    text.innerHTML =
    "Літо — найтепліша пора року. Світить сонце, достигають ягоди та можна купатися.";
    image.src = "images/summer.jpg";
}

function showAutumn() {
    document.body.style.background = "#D98C3F";
    title.innerHTML = "Осінь";
    text.innerHTML =
    "Осінь приносить прохолоду. Листя стає жовтим, помаранчевим і червоним.";
    image.src = "images/autumn.jpg";
}

function showWinter() {
    document.body.style.background = "#DCEEFF";
    title.innerHTML = "Зима";
    text.innerHTML =
    "Зима — холодна пора року. Випадає сніг, а діти люблять кататися на санчатах.";
    image.src = "images/winter.jpg";
}
