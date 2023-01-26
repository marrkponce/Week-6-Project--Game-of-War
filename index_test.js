var expect = chai.expect;

describe('myMyFunction', function(){
    describe('testing our deck of cards', function(){
        it('test if we have 52 cards', function(){
            let testDeck = new Deck();
            testDeck.createDeck();
            console.log('Chai testing', testDeck);
            
            expect(testDeck.cards.length).to.equal(52);
        });

        
    });
});

