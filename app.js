//3.4 Events 2

const title = document.querySelector(".hello:first-child h1");

console.dir(title);
title.innerText = "Hello";


//on~ 는 event
//element의 style은 js 형식으로 작성되어 있음
title.style.color = "blue"; //글자 색깔 blue됨


//click event
function handleTitleClick() {
    title.style.color = "red";
}

function handleMouseEnter() {
    title.innerText = "mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

//실행시킬 function명에 괄호 넣으면 안됨
//console.dir 에서 on~~ 에서 on 빼고 ~~ 를 동작으로 넣어줌
title.addEventListener("click", handleTitleClick); //js에 어떤 event를 listen할지 알려주고 event 발생시 실행할 function 넘겨줌
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);