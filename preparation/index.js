const btnEvent = document.querySelector(".btn");
const btnCount = document.querySelector("#btnCount");
const triggerCount = document.querySelector("#triggerCount");


btnEvent.addEventListener('click', debounce(handler, 3000));

var tc = 0;
var bc = 0;

function handler() {
    triggerCount.innerHTML = ++tc;
}

function debounce(fun, delay) {
    let timer;
    return () => {
        btnCount.innerHTML = ++bc;
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fun();
        }, delay);
    }
}
