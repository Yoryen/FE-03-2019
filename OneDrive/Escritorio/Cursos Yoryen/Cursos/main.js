let user1 = prompt("Choose wisely")
let user2 = prompt("you ran out of options")

if (usuario1 == usuario2) { console.log("Both loose") }
else {
    switch (usuario1) {
        case "piedra":
            if (usuario2 == "papel") { console.log(gana2) }
            break;
        case "papel":
            if (usuario2 == "tijera") { console.log(gana2) }
            break;
        case "tijera":
            if (usuario2 == "piedra") { console.log(gana2) }
            break;
    }
}
console.log(Gana2)



