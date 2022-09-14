//Objects


//list
const player = ["nico", 1212, false, "little bit"];

//Object
const obPlayer = {
    name : "nico",
    points : 10,
    fat : true,
}

obPlayer.fat = false; // object 안의 값을 수정하는 것은 가능. object 전체를 수정하는 것은 불가능(obPlayer = ~~)

obPlayer.lastName = "potato";// object에 값 추가

console.log(obPlayer);
console.log(obPlayer.name);
