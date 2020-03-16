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
        this.classList.add("activ");
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


document.querySelectorAll(".arrow").forEach((el) => {
    el.addEventListener("click", function() {
        document.querySelector(".slider").classList.toggle("active");
        document.querySelectorAll(".slide").forEach((el) => el.classList.toggle("active"));
    })
})

document.querySelector('.first-buttom').addEventListener('click', ()=>{
    document.querySelector('.first-display').classList.toggle('off-display');
})

document.querySelector('.second-buttom').addEventListener('click', ()=>{
    document.querySelector('.second-display').classList.toggle('off-display');
})

document.querySelector(".push button").addEventListener("click", function() {
    document.querySelector(".push").style.display = "none";
})

document.querySelector("form").addEventListener('submit', function () {
    const sub = document.querySelector('input[placeholder="Subject"]').value,
    descript = document.querySelector('textarea[placeholder="Describe your project in detail..."]').value;
    document.querySelector(".push .subject").innerHTML = (sub)? `Subject: ${sub}` : "Without subject";
    document.querySelector(".push .discribe").innerHTML = (descript)? `Description: ${descript}` : "Without description";
    document.querySelector(".push").style.display = "block";
})