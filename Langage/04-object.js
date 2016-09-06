'use strict';

// 1 - Manipuler des objets existants
console.log(Math.sqrt(9)); // 3
console.log(typeof Math); // object
console.log(typeof console); // object

// On peut étendre n'importe quel objet
console.ecrire = function(msg) {
    this.log(msg);
};

console.ecrire('Bonjour');

// 2 - Pour des objets ponctuels on utilise
// la syntaxe object literal

var coords = {
    x: 10,
    y: 23
};
var jsonFromCoords = JSON.stringify(coords);

var json = '{"x": 10, "y": 23}';
var coordsFromJSON = JSON.parse(json);
console.log(coordsFromJSON.x);

function creerBouton(valeur, largeur, hauteur, couleurFond, couleurTexte) {

}

creerBouton('Cliquez ici', false, false, false, '#000000');

function creerBouton(options) {

}

creerBouton({
    valeur: 'Cliquez ici',
    couleurFond: '#000000'
});


// 3 - Simuler des classes avec des fonctions constructeurs

function Contact(prenom) {
    this.prenom = prenom;
}

Contact.prototype.hello = function() {
    return `Bonjour je m'appelle ${this.prenom}`;
};

var romain = new Contact('Romain');

console.log(typeof Contact); // function
console.log(typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Romain

class Personne {
    constructor(prenom) {
        this.prenom = prenom;
    }
    hello() {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

var eric = new Personne('Eric');
console.log(eric.hello());
console.log(typeof Personne); // function