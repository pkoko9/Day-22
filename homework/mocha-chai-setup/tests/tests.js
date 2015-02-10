// Test case #1

var expect = chai.expect;

// describe('max', function (){
// 	it('should not allow non-numeric input', function (){
// 		expect(function(){
// 			max ('a',1)
// 		}).to.throw('The first argument must be a number.');
// 		expect(function(){ max ('',1) }).to.throw('The first argument must be a number.');
// 		expect(function(){ max (1,'') }).to.throw('The second argument must be a number.');
// 		expect(function(){ max (1,'b') }).to.throw('The second argument must be a number.');
// 	});
// 	it('Should return the max', function () {
// 		expect(max(2,1)).to.equal(2);
// 		expect(max(1,2)).to.equal(2);
// 		expect(max(38,87)).to.equal(87);
// 		expect(max(-4,12)).to.equal(12);
// 		expect(max(-5,-17)).to.equal(-5);
// 		expect(max(.23,.87)).to.equal(.87);
// 		expect(max(2,2)).to.equal(2 + ' and ' + 2 + ' are equal');
// 	});
// });

// Test case #2

// describe('maxOfThree', function() {
// 	it('should not allow non-numberic input', function(){
// 		expect (function() {
// 			maxOfThree ('a', 1, 2)
// 		}).to.throw('The first argument must be a number.');
// 		expect(function() { maxOfThree(28, 'b', 5) }).to.throw('The second argument must be a number.');
// 		expect(function() { maxOfThree(14, 7, 'c') }).to.throw('The third argument must be a number.');
// 		expect(function() { maxOfThree(14, 7) }).to.throw('The third argument must be a number.');
//  });
//  it('should return the max', function(){
//  	expect(maxOfThree(10,20,30)).to.equal(30);
//  	expect(maxOfThree(-10,10,20)).to.equal(20);
//  	expect(maxOfThree(0.5,0.7,0)).to.equal(0.7);
//  	expect(maxOfThree(-10,-20,-30)).to.equal(-10);
//  });
// });

// Test case #3

// describe('isVowel', function () {
// 	it('should only allow vowels to be entered', function () {
// 		expect (function() {
// 			isVowel (1)
// 		}).to.throw('Argument is number and not a vowel.');
// 		expect(function() {isVowel ('#')}).to.throw('Argument is a special character and not a vowel.');
// 		expect(function() {isVowel (l)}).to.throw('Argument is a consonant');
// 		expect(function() {isVowel (L)}).to.throw('Argument is a consonant') 
// 	});
// 	it('should identify a vowel', function (){
// 		expect(isVowel(a)).to.equal(a + ' is a vowel');
// 		expect(isVowel(e)).to.equal(e + ' is a vowel');
// 		expect(isVowel(i)).to.equal(i + ' is a vowel');
// 		expect(isVowel(o)).to.equal(o + ' is a vowel');
// 		expect(isVowel(u)).to.equal(u + ' is a vowel');
// 		expect(isVowel(y)).to.equal(y + ' is sometimes a vowel');
// 		expect(isVowel(A)).to.equal(A + ' is a vowel');
// 		expect(isVowel(E)).to.equal(E + ' is a vowel');
// 		expect(isVowel(I)).to.equal(I + ' is a vowel');
// 		expect(isVowel(O)).to.equal(O + ' is a vowel');
// 		expect(isVowel(U)).to.equal(U + ' is a vowel');
// 		expect(isVowel(Y)).to.equal(Y + ' is sometimes a vowel');
// 	});
// });

// Test case #4

describe('translate', function () {
	it('should not allow numeric or special character input', function () {
		expect (function() {
			translate (1)
		}).to.throw('Argument is number and not a letter.');
		expect(function() {translate ('#')}).to.throw('Argument is a special character and not a letter.')
	});
	
	it('should identify whether letters are consonants or vowels', function (){
		expect(translate(a)).to.equal(a + ' is a vowel');
		expect(translate(A)).to.equal(A + ' is a vowel');
		expect(translate(b)).to.equal(b + ' is a consonant');
		expect(translate(B)).to.equal(B + ' is a consonant');
		expect(isVowel(y)).to.equal(y + ' is a consonant');
		expect(isVowel(Y)).to.equal(A + ' is a consonant');
	});
});

// Test case #5

describe('arrayAdd', function() {
	it('should require array input', function() {
		expect(function() {
			arrayAdd();
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayAdd({foo: 'bar'});
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayAdd(7);
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayAdd('hello');
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayAdd(true);
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayAdd(true, [1,2,3]);
		}).to.throw('First argument must be an array.');
	});

	it('should return the sum value of all numerals in the array', function() {
		expect(arrayAdd([1,2,3])).to.equal(6);
		expect(arrayAdd([10,10,10])).to.equal(30);
		expect(arrayAdd([3,2,2])).to.equal(7);
		expect(arrayAdd([20,3,20,2,3])).to.equal(48);
		expect(arrayAdd([77])).to.equal(77);
		expect(arrayAdd([0, 38, -7.5])).to.equal(30.5);
		expect(arrayAdd([3.4, 3.6])).to.equal(7);
		expect(arrayAdd([-77, -4, -33.7, -22])).to.equal(-136.7);
	});

	it('should only allow numeric values in my array', function() {
		expect(function() {
			arrayAdd([1,'two',3]);
		}).to.throw('Array should only contain numeric values.');

		expect(function() {
			arrayAdd([{foo: 'bar'},7,3]);
		}).to.throw('Array should only contain numeric values.');
	});

	it('should not allow empty arrays', function() {
		expect(function() {
			arrayAdd([]);
		}).to.throw('Array must have at least one element.');
	})

});

describe('arrayMultiply', function() {
	it('should require array input', function() {
		expect(function() {
			arrayMultiply();
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayMultiply({foo: 'bar'});
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayMultiply(7);
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayMultiply('hello');
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayMultiply(true);
		}).to.throw('First argument must be an array.');

		expect(function() {
			arrayMultiply(true, [1,2,3]);
		}).to.throw('First argument must be an array.');
	});

	it('should return the product value of all numerals in the array', function() {
		expect(arrayMultiply([1,2,3])).to.equal(6);
		expect(arrayMultiply([10,10,10])).to.equal(1000);
		expect(arrayMultiply([3,2,2])).to.equal(12);
		expect(arrayMultiply([20,3,20,2,3])).to.equal(7200);
		expect(arrayMultiply([77])).to.equal('undefined');
		expect(arrayMultiply([0, 38, -7.5])).to.equal(0);
		expect(arrayMultiply([3.4, 3.6])).to.equal(12.24);
		expect(arrayMultiply([-7, -4, -3])).to.equal(-84);
	});

	it('should only allow numeric values in my array', function() {
		expect(function() {
			arrayMultiply([1,'two',3]);
		}).to.throw('Array should only contain numeric values.');

		expect(function() {
			arrayMultiply([{foo: 'bar'},7,3]);
		}).to.throw('Array should only contain numeric values.');
	});

	it('should not allow empty arrays', function() {
		expect(function() {
			arrayMultiply([]);
		}).to.throw('Array must have at least one element.');
	})

});

