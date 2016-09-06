

var tempALaCreation = 'truc';

function addition(nb1, nb2) {
    if (typeof nb1 === 'undefined') {
        throw new Error('nb1 is required');
    }
    nb2 = nb2 || 0; // valeur par défaut 0
    return Number(nb1) + Number(nb2);
}

module.exports = addition;