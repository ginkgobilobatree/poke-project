// console.clear()

/* --------------------------POKEMON CLASS----------------------------- */

class Pokémon {
    constructor(name, kp, energie, bild) {

        this.name = name
        this.fixKp = kp
        this.varKp = kp
        this.varEnergie = energie
        this.fixEnergie = energie
        this.bild = `<img src=${bild} alt='${this.name}'>`
        this.attacken = []
    }
    
    lerneAttacke(attacke) {
        this.attacken.push(attacke)
    }
    zeigeStatus() {
        console.log(`${this.name}s status:
                    kp - ${this.varKp}/${this.fixKp}                   
                    energie - ${this.varEnergie}/${this.fixEnergie}                   
                    attacken - ${this.attacken.map(x => x.name)}`)
    }                                                                                                                                                    
    angriff(attackIndex, opfer) { 
        opfer.varKp -= this.attacken[attackIndex].kp
        this.varEnergie -= this.attacken[attackIndex].energie
    }
}

/* ------------------------------ATTACK CLASS------------------------------- */

function Attacke(name, kp, energie) {

    this.name = name;
    this.kp = kp;
    this.energie = energie;
}

/* ----------------------------------ASSIGNING POKEMONS------------------------ */

let pikachu = new Pokémon('Pikachu', 120, 80, 'image/pikachu.png');
let bisasam = new Pokémon('Bisasam', 95, 105, 'image/bulbasur.png');
let ultraNecrozma = new Pokémon('Ultra-Necrozma', 180, 200, 'image/ultra-necrozma.jpeg')
let evoli = new Pokémon('Evoli', 50, 100, 'image/evoli.png');
let pizzaMan = new Pokémon('Pizza-Man', 150, 90, 'image/pizzaMan.jpeg');
let trumpi = new Pokémon('Trumpi', 60, 50, 'image/trumpiThreat.png');
let shiggy = new Pokémon('Shiggy', 100, 110, 'image/shiggy.png');
let glumanda = new Pokémon('Glumanda', 90, 130, 'image/glumanda.png');

/* ----------------------------------ASSIGNING ATTACKS------------------------- */

let donnerblitz = new Attacke(' Donnerblitz', 20, 30);
let egelsamen = new Attacke(' Egelsamen', 10, 20);
let knuddler = new Attacke(' Knuddler', 30, 20);
let phantomGeysir = new Attacke(' Phantom-Geysir', 170, 80);
let extraCheese = new Attacke(' Extra Cheese', 10, 5);
let duckFace = new Attacke(' Duck Face', 1, 20);
let aquaKnarre = new Attacke(' Aqua-Knarre', 15, 20);
let feuerZahn = new Attacke('Feuerzahn', 20, 15)

/* ----------------------------------LEARNING AREA--------------------------------- */

pikachu.lerneAttacke(donnerblitz);
pikachu.lerneAttacke(egelsamen);
bisasam.lerneAttacke(egelsamen);
bisasam.lerneAttacke(donnerblitz);
evoli.lerneAttacke(knuddler);
ultraNecrozma.lerneAttacke(phantomGeysir);
pizzaMan.lerneAttacke(extraCheese);
trumpi.lerneAttacke(duckFace);
shiggy.lerneAttacke(aquaKnarre);
glumanda.lerneAttacke(feuerZahn);

/* -----------------------------------my Pokemon and opponents------------------- */

let myPokemons = [pikachu, evoli, shiggy, pizzaMan];
let opponents = [bisasam, glumanda, ultraNecrozma, trumpi];

/* ------------------------------------TEST FIGHT IN TERMINAL----------------------------------*/


// pikachu.angriff(0, evoli);
// evoli.angriff(0, pikachu)
// console.log(pikachu);
// console.log(evoli);

/* ----------------------------------DOM STUFF BEGINS-----------------------------*/

let a = 0; //index von myPokemons-Array
let schwammKopf = document.querySelector('#myPokemon').innerHTML;
    schwammKopf = myPokemons[a].name;
    document.getElementById("left-image").innerHTML = myPokemons[a].bild;
    document.getElementById('text-myPokemon').innerHTML = `Energie: ${myPokemons[a].varEnergie} von ${myPokemons[a].fixEnergie}<br/>KP: ${myPokemons[a].varKp} von ${myPokemons[a].fixKp}<br/>Attacken: ${myPokemons[a].attacken.map(x => x.name)}`;
let b = 0; //index von opponents-Array  1
    document.querySelector('#opponent').innerHTML = opponents[b].name;
    document.getElementById("right-image").innerHTML = opponents[b].bild;
    document.getElementById('text-opponent').innerHTML = `Energie: ${opponents[b].varEnergie} von ${opponents[b].fixEnergie}<br/>KP: ${opponents[b].varKp} von ${opponents[b].fixKp}<br/>Attacken: ${opponents[b].attacken.map(x => x.name)}`;


/* ----------------------------------GO THROUGH ARRAYS----------------------  */

const scrollUpA = () => {
    a++;
    if (a >= myPokemons.length) a -= myPokemons.length;
    document.querySelector('#myPokemon').innerHTML = myPokemons[a].name;
    document.getElementById("left-image").innerHTML = myPokemons[a].bild;
    document.getElementById('text-myPokemon').innerHTML = `Energie: ${myPokemons[a].varEnergie} von ${myPokemons[a].fixEnergie}<br/>KP: ${myPokemons[a].varKp} von ${myPokemons[a].fixKp}<br/>Attacken: ${myPokemons[a].attacken.map(x => x.name)}`;
}

const scrollDownA = () => {
    a--;
    if (a < 0) a += myPokemons.length;
    document.querySelector('#myPokemon').innerHTML = myPokemons[a].name;
    document.getElementById("left-image").innerHTML = myPokemons[a].bild;
    document.getElementById('text-myPokemon').innerHTML = `Energie: ${myPokemons[a].varEnergie} von ${myPokemons[a].fixEnergie}<br/>KP: ${myPokemons[a].varKp} von ${myPokemons[a].fixKp}<br/>Attacken: ${myPokemons[a].attacken.map(x => x.name)}`;
}

const scrollUpB = () => {
    b++;
    if (b >= opponents.length) b -= opponents.length;
    document.querySelector('#opponent').innerHTML = opponents[b].name;
    document.getElementById("right-image").innerHTML = opponents[b].bild;
    document.getElementById('text-opponent').innerHTML = `Energie: ${opponents[b].varEnergie} von ${opponents[b].fixEnergie}<br/>KP: ${opponents[b].varKp} von ${opponents[b].fixKp}<br/>Attacken: ${opponents[b].attacken.map(x => x.name)}`;
}

const scrollDownB = () => {
    b--;
    if ( b < 0) b += opponents.length;
    document.querySelector('#opponent').innerHTML = opponents[b].name;
    document.getElementById("right-image").innerHTML = opponents[b].bild;
    document.getElementById('text-opponent').innerHTML = `Energie: ${opponents[b].varEnergie} von ${opponents[b].fixEnergie}<br/>KP: ${opponents[b].varKp} von ${opponents[b].fixKp}<br/>Attacken: ${opponents[b].attacken.map(x => x.name)}`;
}

document.getElementById('rightA').addEventListener('click', scrollUpA);
document.getElementById('leftA').addEventListener('click', scrollDownA);

document.getElementById('rightB').addEventListener('click', scrollUpB);
document.getElementById('leftB').addEventListener('click', scrollDownB);

/* -------------------------------------------------FIGHT BUTTON------------------------------------ */

const fight = () => {

    document.getElementById('moving1').classList.toggle('moveSmack'); //BAM - moving
    document.getElementById('moving1').classList.remove('moveSmack'); // Animation wird zurückgesetzt
    void document.getElementById('moving1').offsetWidth; // trigger reflow
    document.getElementById('moving1').classList.add('moveSmack'); // Animation wird gestartet

    document.getElementById('moving2').classList.toggle('moveBounce'); //BAM - moving
    document.getElementById('moving2').classList.remove('moveBounce'); // Animation wird zurückgesetzt
    void document.getElementById('moving2').offsetWidth; // trigger reflow
    document.getElementById('moving2').classList.add('moveBounce'); // Animation wird gestartet

    myPokemons[a].angriff(0, opponents[b]);

    if (opponents[b] === trumpi) {
        trumpi.bild = `<img src='image/astonishedTrumpi.png' alt='Trumpi'>`
        document.getElementById('right-image').innerHTML = trumpi.bild
    }

    document.getElementById('text-myPokemon').innerHTML = `Energie: ${myPokemons[a].varEnergie} von ${myPokemons[a].fixEnergie}<br/>KP: ${myPokemons[a].varKp} von ${myPokemons[a].fixKp}<br/>Attacken: ${myPokemons[a].attacken.map(x => x.name)}`;
    document.getElementById('text-opponent').innerHTML = `Energie: ${opponents[b].varEnergie} von ${opponents[b].fixEnergie}<br/>KP: ${opponents[b].varKp} von ${opponents[b].fixKp}<br/>Attacken: ${opponents[b].attacken.map(x => x.name)}`;
}
document.getElementById('fight').addEventListener('click', fight);


/* ------------------------------------------------ARENA BUTTON---------------------------------------- */

let backPics = ["url('image/background/beach.png')", "url('image/background/clouds.jpeg')", "url('image/background/hobbitHouse.jpg')", "url('image/background/toronto.jpg')", "url('image/background/water.jpg')", "url('image/background/forest.jpeg')"]

let c = 0;

document.getElementById('main').style.background = `${backPics[c]}`+`center / cover no-repeat`;

const arenaChange = () => {
    c++;
    if (c >= backPics.length) c -= backPics.length;
    if (c === 4) {
        document.getElementById('main').style.background = `${backPics[c]}`+`center /103% repeat-x`;
        document.getElementById('main').classList.toggle('moveToronto');
        document.getElementById('main').classList.remove('moveToronto'); // Animation wird zurückgesetzt
        void document.getElementById('main').offsetWidth; // trigger reflow
        document.getElementById('main').classList.add('moveToronto');
    } else {
    document.getElementById('main').style.background = `${backPics[c]}`+`center / cover no-repeat`;
    }
}

/* ----------------------------------------------- */