let paragrap = document.getElementById("parag")
// console.log(paragrap);

let courses = document.getElementsByClassName("subjects")
// console.log(courses);

let sub = document.querySelectorAll("ul>ul>li")
// console.log(sub[1].textContent);

let addbtn = document.querySelector(".addbg")

let removebtn = document.querySelector("#removebg")

addbtn.addEventListener("click",() => {
document.body.style.backgroundColor = "grey";
});

removebtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "#fff"
})


