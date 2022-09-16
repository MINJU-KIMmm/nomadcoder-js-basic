//2.13 Conditionals

const age = parseInt(prompt("How old are you?")); //prompt : 사용자에게 창을 띄워줌. prompt(message(string), default)

//console.log(isNaN(age)); //숫자가 아닌지

if(isNaN(age) || age < 0) {
    console.log("Please write a positive number.")
} else if(age < 18) {
    console.log("You are too young");
} else if(age>=18 && age <= 50) { //and : && , or : ||
    console.log("You can drink.")
} else if(age > 50 && age <= 80) {
    console.log("You should exercise.")
} else if (age > 80) {
    console.log("You can do whatever");
}
