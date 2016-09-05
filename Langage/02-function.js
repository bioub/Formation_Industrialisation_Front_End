

function addition(nb1, nb2) {
    nb2 = nb2 || 0; // valeur par défaut 0
    return Number(nb1) + Number(nb2);
}

console.log(addition(3, 2)); // 3
console.log(addition('3', '2')); // 3
console.log(addition(3, 2, 3)); // 3
console.log(addition(45)); // 3



for (var i=0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

function closure(iSaved) {
    // Portée de closure (sauvegardée)
    function interne() {
        console.log(iSaved);
    }

    return interne;
}

for (var i=0; i<3; i++) {
    setTimeout(closure(i), 1000);
}