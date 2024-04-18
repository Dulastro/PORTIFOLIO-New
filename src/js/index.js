let btn = document.getElementById("btn-verMais");
let liSkills = document.querySelectorAll("li.ver-mais");

btn.addEventListener("click", () => {
  showLi();
  noneLI();
});

function showLi() {
  liSkills.forEach((element) => {
    element.classList.remove("ver-mais");
  });
}

function noneLI() {
  btn.classList.add("ver-mais");
}
