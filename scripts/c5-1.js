var div1 = document.createElement('div');
div1.innerText = 'Zdravo Svetu!';

div1.style.color = '#ffffff';
div1.style.backgroundColor = 'red';
div1.style.height = '200px';

console.log(div1);

var body = document.querySelector('body');

body.appendChild(div1);






var studenti = [
	{ime: 'Pero', prezime: 'Perovski', prosek: 7},
	{ime: 'Janko', prezime: 'Jankovski', prosek: 9},
	{ime: 'Stanko', prezime: 'Stakovski', prosek: 6.5},
	{ime: 'Petko', prezime: 'Petkovski', prosek: 9.5},
];

var table = document.createElement('table');
table.border = 1;

for(let i = 0; i < studenti.length; i ++){
	var tr = document.createElement('tr');
	
	var td1 = document.createElement('td');
	td1.innerText = studenti[i].ime;
	tr.appendChild(td1);

	var td2 = document.createElement('td');
	td2.innerText = studenti[i].prezime;
	tr.appendChild(td2);

	var td3 = document.createElement('td');
	td3.innerText = studenti[i].prosek;
	tr.appendChild(td3);

	table.appendChild(tr);
}

body.appendChild(table);