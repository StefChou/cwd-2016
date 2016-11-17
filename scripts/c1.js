var ime = 'Stefan'; //string
var vozrast = 27; // number (integer)
var visina = 169.5; //number (float)
var vozacka_dozvola = true; //boolean

//vozacka_dozvola - snake case
//vozackaDozvola - camel case

console.log('Zdravo Svetu');

console.log(ime);
console.log(vozrast);
console.log(visina);
console.log(vozacka_dozvola);

console.debug('Debugging some variables...');
console.error('My name is not ' + ime);
console.info('This guy is this hight: ' + visina + 'cm')


//vezba
var ime = 'Stefan';
var prezime = 'Stojkovski';
var adresa = 'bul. Partizanski Odredi 149/35';
var godini = 27;
var golem = true;
var vozilo = 'ima';


console.log(ime)
console.log(prezime);
console.log(adresa);
console.log(godini);
console.log(golem);
console.log(vozilo);

var a = 10;
var b = 13;
var c = 4;
var d = 22;

var e = a + b * c / d;
console.log(e);

var f = (a + b) * (c / d);
console.log(f);

var g = 20;
var h = 3;

console.log(g % h);

function zdravo(){
	console.log('Zdravo Svetu');
}

zdravo();

function pozdrav(ime){
	console.log('Zdravo ' + ime);
}

pozdrav('Pero');
pozdrav('Janko');
pozdrav('Stanko');


function f2c(temperatura){
	console.log((temperatura - 32) / 1.8)
}

// function f2c(far) {
// 	var output = (far - 32) / 1.8;
// 	console.log(output);
// }

function c2f(temperatura){
	console.log(temperatura * 1.8 + 32)
}

// function c2f(cel) {
// 	var output = cel * 1.8 + 32;
// 	console.log(output);
// }


f2c(100);

c2f(40);
