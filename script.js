function menu(selector){
    document.querySelectorAll(selector).forEach((el) => el.addEventListener('click', function () {
        document.querySelectorAll(selector).forEach((el) => el.classList.remove("activ"));
        this.classList.add("activ");
}));
}

menu(".menu a");

let images = [
    "assets/img/portfolio/Project1.png",
    "assets/img/portfolio/Project2.png",
    "assets/img/portfolio/Project3.png",
    "assets/img/portfolio/Project4.png",
    "assets/img/portfolio/Project5.png",
    "assets/img/portfolio/Project6.png",
    "assets/img/portfolio/Project7.png",
    "assets/img/portfolio/Project8.png",
    "assets/img/portfolio/Project9.png",
    "assets/img/portfolio/Project10.png",
    "assets/img/portfolio/Project11.png",
    "assets/img/portfolio/Project12.png",
];

document.querySelectorAll(".portfolio nav li").forEach((el) => el.addEventListener('click', function () {
    if(!this.classList.contains("activ")) {
        images = images.reverse();
        document.querySelectorAll(".portfolio .conteiner img").forEach((el) => el.classList.remove("activ"));
        document.querySelectorAll(".portfolio .conteiner img").forEach((el, i) => el.src = images[i]);
    };
}));
menu(".portfolio nav li");

document.querySelectorAll(".portfolio .conteiner img").forEach((el) => {
    el.addEventListener("click", function () {
        if(!this.classList.contains("activ")) {
            document.querySelectorAll(".portfolio .conteiner img").forEach((el) => el.classList.remove("activ"));
            this.classList.add("activ");
        }
    })
});