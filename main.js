let input = document.querySelector(".input");


let list = document.querySelectorAll(".show");
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})

function showDisplay(event) {
    const x = event.target.innerText;
    if (input.innerHTML == 0) {
        return input.innerHTML = x;
    }
    return input.innerHTML += x;
};

function calculate() {
    let result = input.innerText;
    input.innerText = eval(result);
};



document.querySelector(".calculation").addEventListener("click", calculate);




document.querySelector(".clear").addEventListener("click", function() {
    let text = input.innerText;
    if (text.length === 1) {
        input.innerText = 0;
    } else {
        input.innerText = text.substring(0, text.length - 1);
    }
});
document.querySelector(".clear-all").addEventListener("click", function() {
    input.innerText = 0;
})