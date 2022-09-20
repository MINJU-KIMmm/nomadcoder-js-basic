//3.1 HTML in JS

const title = document.getElementById("title"); //JS에서 HTML을 읽을 수 있음

console.dir(title); //정보 더 자세히 보여줌


title.innerText = "Got you!"; //js코드로 html 변경

console.log(title.id);
console.log(title.className);