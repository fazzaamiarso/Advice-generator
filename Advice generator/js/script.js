let adviceNumber = document.getElementById("advice-number");
let button = document.querySelector(".button");
let adviceBox = document.querySelector(".content__box");

let activeAdvice = 0;
function changeHandler() {
   let adviceText = Array.from(document.querySelectorAll(".content__text"));
   let randomAdvice = Math.floor(Math.random() * adviceText.length);
   adviceText[activeAdvice].classList.replace("active", "disable");
   adviceText.forEach(Text => {
      Text.addEventListener("transitionend", () => {
         if (Text.classList.contains("disable")) {
            Text.classList.replace("disable", "next")
         }
      })
   });
   if (randomAdvice === activeAdvice) {
      return changeHandler();
   }
   adviceText[randomAdvice].classList.replace("next", "active");
   activeAdvice = randomAdvice;
   adviceNumber.textContent = `#${adviceText[activeAdvice].dataset.number}`
}


button.addEventListener("click", changeHandler);













