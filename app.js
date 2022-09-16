//2.13 Conditionals

const age = parseInt(prompt("How old are you?")); //prompt : 사용자에게 창을 띄워줌. prompt(message(string), default)
//메시지를 띄우고 사용자에게 값을 입력 받음(팝업)
//사용자가 입력을 하지 않으면 자바스크립트가 더이상 동작 안 함
//-> 잘 안 씀

//parseInt : type을 int로 바꿈(원래 default : string)

console.log(typeof age); //typeof ~~ : ~~의 타입확인
// 숫자 아닌 형태를 parseInt하면 NaN
