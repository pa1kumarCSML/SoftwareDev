const btnEvent = document.querySelector(".btn");
const btnCount = document.querySelector("#btnCount");
const triggerCount = document.querySelector("#triggerCount");


btnEvent.addEventListener('click', throttle(handler, 3000));

var tc = 0;
var bc = 0;

function handler() {
    triggerCount.innerHTML = ++tc;
}

function throttle(fun, delay) {
    let flag = true;
    return () => {
        btnCount.innerHTML = ++bc;
        if (flag) {
            fun();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}
