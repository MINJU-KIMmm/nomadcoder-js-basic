//3.5 More Events

const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);
h1.innerText = "Hello";


//on~ 는 event
//element의 style은 js 형식으로 작성되어 있음
h1.style.color = "blue"; //글자 색깔 blue됨


//click event
function handleTitleClick() {
    h1.style.color = "red";
}

function handleMouseEnter() {
    h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("it's good");
}
//실행시킬 function명에 괄호 넣으면 안됨
//console.dir 에서 on~~ 에서 on 빼고 ~~ 를 동작으로 넣어줌
h1.addEventListener("click", handleTitleClick); //js에 어떤 event를 listen할지 알려주고 event 발생시 실행할 function 넘겨줌
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// h1.onclick  = handleTitleClick;
// h1.onmouseenter = handleMouseEnter; // 이방법도 가능

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);