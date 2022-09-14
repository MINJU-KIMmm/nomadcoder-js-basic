//Functions

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("asd", 123);
sayHello("werg", 435);
sayHello("cxb", 12);
sayHello("ntrr",324);



function plus(a, b) {
    console.log(a + b)
}

plus(8, 40);

//NaN : 숫자 아님 이라는 뜻




const player = {
    name : "nico",
    sayHello : function(otherPerson) {
        console.log("hello" + otherPerson + "nice to meet you");
    }
}

player.sayHello("wef");