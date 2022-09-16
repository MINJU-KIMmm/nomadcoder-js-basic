//2.13 Conditionals

const age = parseInt(prompt("How old are you?")); //prompt : 사용자에게 창을 띄워줌. prompt(message(string), default)

//console.log(isNaN(age)); //숫자가 아닌지

if(isNaN(age)) {
    console.log("Please write a number.")
} else {
    console.log("Thank you!")
}
