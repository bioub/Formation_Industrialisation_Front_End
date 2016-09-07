
function addition(a, b) {
    return a + b;
}

describe('Calculette', function() {

    describe('addition', function() {
        it('devrait retourner 3 paramètres 1 et 2', function() {
            expect(addition(1, 2)).toEqual(3);
        });
    });
});

