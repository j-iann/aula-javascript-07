//#1
var cidades_pe = ["Recife", "Olinda", "Jaboatão", "Petrolina", "Gravatá", "Caruaru", "Bonito"];
console.log(cidades_pe.reverse());

cidades_pe.splice(3, 1, "Pombos");
cidades_pe.splice(6, 1, "Paulista");
console.log(cidades_pe);

//#2
var numeros = [1, 4, 8, 6, 9, 2, 6, 7, 3, 0, 5];

var index_9 = numeros.indexOf(9);
console.log(index_9);