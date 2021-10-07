//#1
var texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.";
console.log(texto.length);
console.log(texto.toUpperCase());

var index_a = texto.indexOf("a");
console.log(index_a);
var vogais = [];

for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u" || texto[i] == "é")  {
        vogais.push(texto[i]);
    }
}
console.log(vogais.length);

console.log(texto.toLowerCase());
var humanidade = texto.indexOf("humanidade");
console.log(humanidade);

//#2
var numeros = [];
for (var r = 0; r <= 100; r++) {
    if (r % 2 == 0) {
        numeros.push(r);
    }
}
var numeros_string = numeros.toString();
console.log(numeros_string);