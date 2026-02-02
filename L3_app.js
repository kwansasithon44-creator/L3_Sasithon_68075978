const input = document.querySelector("input");
const count = document.querySelector(".count");

input.addEventListener("input", () => {
    count.textContent = input.value.length;
});
