var parni_broevi = [2, 4, 6 , 8, 10];
console.log(parni_broevi);

console.log(parni_broevi[2]);


var iminja = ['Bojan', 'Janko', 'Petko', 'Stanko'];
console.log(iminja);
console.log(iminja[3]);
console.log(iminja.length);



var nizi = [
	['Pero', 'Janko', 'Stanko'],
	[123, 456, 789],
	[true, false, true],
	[1.85, 2.32, 1.11],
];

console.log(nizi);
console.log(nizi[0][2]);
console.log(nizi.length);



var n = [];
n[10] = 'Skopje';
n[20] = 'Veles';
n[22] = 'Ohrid';

console.log(n);
console.log(n.length);


var test = [
	{ime: 'Pero Perovski', ocena: 5},
	{ime: 'Janko Jankovski', ocena: 4},
	{ime: 'Stanko Stakovski', ocena: 2},
	{ime: 'Goran Goranovski', ocena: 3},
	{ime: 'Ivan Ivanovski', ocena: 1},
];

//Stanko Stankovski
//4
//Ivan Ivanovski
//1
//Pero Perovski ima ocena 5

console.log(test[2].ime);
console.log(test[1].ocena);
console.log(test[4].ime);
console.log(test[4].ocena);
console.log(test[0].ime + 'ima ocena' + test[0].ocena);



var pozdrav = function(){
	console.log('Zdravo Svetu!');
}

pozdrav();

var pozdravIme = function(ime){
	console.log('Zdravo' + ime);
}
pozdravIme('Pero');



var funkcii = {
	eden: function(){
		console.log('Funkcija br 1');
	},
	dva: function(){
		console.log('Funcija br 2');
	},
	tri: function(){
		console.log('Funkcija br 3');
	}
};

funkcii.dva();
funkcii['dva']();

var broj = 'tri';
funkcii[broj]();
//funkcii['tri'](); - istoto




//vezba

// function cigari(br, cena, avtomobil){
// 	switch(avtomobil){
// 		case 'dacia':
// 			return (11000 * 61.5) / (br * 365 / 19 * cena);
// 		break;
// 		case 'skoda':
// 			return (14000 * 61.5) / (br * 365 / 19 * cena);
// 		break;
// 		case 'vw':
// 			return (20000 * 61.5) / (br * 365 / 19 * cena);
// 		break;
// 		case 'audi':
// 			return (20000 * 61.5) / (br * 365 / 19 * cena);
// 		break;
// 		case 'bmw':
// 			return (30000 * 61.5) / (br * 365 / 19 * cena);
// 		break;
// 	}
// }

// var broj_na_cigari = 38;
// var kutija_cena = 140;


var avtomobili = {
	dacia: function(c){
		return (11000 * 61.5) / c;
	},
	skoda: function(c){
		return (14000 * 61.5) / c;
	}
};


function presmetka(br, cena, avt){ 
	var p = br * 365 / 19 * cena; // "p" e isto so "c"
	return avtomobili[avt](p);
}

console.log(presmetka(16, 90, 'dacia'));
console.log(presmetka(16, 90, 'skoda'));