function k2p(kilo){
	var output = kilo * 2.2046;
	return output;
}

var r = k2p(100);
//console.log(r);


var a = 10;
var b = 27;

if(a > 4 && b < 50){
	console.log('VISTINA');
} else {
	console.log('NEVISTINA!');
}




a = 5;
b = 10;
var c = 15;
var d = 25;

if(a < 10 && (b > 14  || c > 100) || !(d == 20)){
	console.log('vistina');
} else {
	console.log('nevistina');
}



var e = 7;

if (e <= 5){
	console.log('mal broj');
} else if (e > 5 && e <= 10) {
	console.log('srededn broj');
} else {
	console.log('golem broj');
}



var ovoshje = 'Cresha';
var dolzina_ovoshje = ovoshje.length;
console.log(dolzina_ovoshje);


function ubavoOvoshje (o){
	// var br = o.length;
	
	
	// if(br % 2 == 0){
	// 	return true;
	// } else {
	// 	return false;
	// }

	
	// return br % 2 == 0 ? true : false;

	
	// return br % 2 == 0;

	
	return o.length % 2 == 0;
}


var u = ubavoOvoshje('portokal')

if(u){
	console.log('Ovoshjeto e ubavo');
} else {
	console.log('Ovoshjeto ne e ubavo');
}




// function matematika(znak, a, b){
// 	if('+' == znak){
// 		return a + b;
// 	} else if('-' == znak) {
// 		return a - b;
// 	} else if('/' == znak) {
// 		return a / b;
// 	} else if('*' == znak) {
// 		return a * b;
// 	}
// }

function matematika(znak, a, b){
	switch(znak){
		case '+':
			return (a + b);
		break;

		case '/':
			return (a / b);
		break;

		case '-':
			return (a - b);
		break;

		case '*':
			return (a * b);
		break;
	}
}


var s = matematika('+', 2, 4);
console.log(s); // 6

var d = matematika('/', 6, 3);
console.log(d); // 2

var o = matematika('-', 6, 3);
console.log(o); // 3

var m = matematika('*', 6, 3);
console.log(m); // 18





var grad = 'Shtip';

switch(grad){
	case 'Veles':
		console.log('Zdravo Veleshani!');
	break;

	case 'Skopje':
		console.log('Zdravo Skopjanischa!');
	break;

	case 'Ohrid':
		console.log('Zdravo Origjani!');
	break;

	default:
		console.log('Zdravo nepoznat gradu!');
	break;
}


// Domasno: funkcion so 3 parametri cig(15, 100, dacia) za kolku vreme ke moze da si kupis kola ako prekines denes da pusis cigari
	// 1. Dacia - 11.000 eur
	// 2. Shkoda - 14.000 eur
	// 3. VW - 20.000 eur
	// 4. Audi - 30.000 eur
	// 5. BMW - 50.000 eur
