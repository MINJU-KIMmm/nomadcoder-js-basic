//3.2 Searching For Elements

// const title = document.getElementsByTagName("h1"); //태그 이름으로 가옴

// const title = document.querySelector(".hello h1"); //element를 css방식으로 검색. hello 내부의 h1 가져올 수 있음. 첫번째 거만 return
const title = document.querySelectorAll(".hello h1"); //return array
console.log(title);