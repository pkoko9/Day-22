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

describe('isVowel', function () {
	it('should only allow vowels to be entered', function () {
		expect (function() {
			isVowel (1)
		}).to.throw('Argument is number and not a vowel.');
		expect(function() {isVowel(@)}).to.throw('Argument is a special character and not a vowel.');
		expect(function() {isVowel (l)}).to.throw('Argument is a consonant');
		expect(function() {isVowel (L)}).to.throw('Argument is a consonant') 
	});
	it('should identify a vowel', function (){
		expect(isVowel(a)).to.equal(a + ' is a vowel');
		expect(isVowel(e)).to.equal(e + ' is a vowel');
		expect(isVowel(i)).to.equal(i + ' is a vowel');
		expect(isVowel(o)).to.equal(o + ' is a vowel');
		expect(isVowel(u)).to.equal(u + ' is a vowel');
		expect(isVowel(y)).to.equal(y + ' is sometimes a vowel');
		expect(isVowel(A)).to.equal(a + ' is a vowel');
		expect(isVowel(E)).to.equal(e + ' is a vowel');
		expect(isVowel(I)).to.equal(i + ' is a vowel');
		expect(isVowel(O)).to.equal(o + ' is a vowel');
		expect(isVowel(U)).to.equal(u + ' is a vowel');
		expect(isVowel(Y)).to.equal(y + ' is sometimes a vowel');
	});
});

// describe('maxInArray', function() {
// 	it('should require array input', function() {
// 		expect(function() {
// 			maxInArray();
// 		}).to.throw('First argument must be an array.');

// 		expect(function() {
// 			maxInArray({foo: 'bar'});
// 		}).to.throw('First argument must be an array.');

// 		expect(function() {
// 			maxInArray(7);
// 		}).to.throw('First argument must be an array.');

// 		expect(function() {
// 			maxInArray('hello');
// 		}).to.throw('First argument must be an array.');

// 		expect(function() {
// 			maxInArray(true);
// 		}).to.throw('First argument must be an array.');

// 		expect(function() {
// 			maxInArray(true, [1,2,3]);
// 		}).to.throw('First argument must be an array.');
// 	});

// 	it('should return the max value in the array', function() {
// 		expect(maxInArray([1,2,3])).to.equal(3);
// 		expect(maxInArray([3,2,1,1,1])).to.equal(3);
// 		expect(maxInArray([3,2,2])).to.equal(3);
// 		expect(maxInArray([20,3,20,2,3])).to.equal(20);
// 		expect(maxInArray([77])).to.equal(77);
// 		expect(maxInArray([0, 38, -7.5])).to.equal(38);
// 		expect(maxInArray([3.4, 3.6])).to.equal(3.6);
// 		expect(maxInArray([3.4, 3.3])).to.equal(3.4);
// 		expect(maxInArray([-77, -4, -33.7, -22])).to.equal(-4);
// 	});

// 	it('should only allow numeric values in my array', function() {
// 		expect(function() {
// 			maxInArray([1,'two',3]);
// 		}).to.throw('Array should only contain numeric values.');

// 		expect(function() {
// 			maxInArray([{foo: 'bar'},7,3]);
// 		}).to.throw('Array should only contain numeric values.');
// 	});

// 	it('should not allow empty arrays', function() {
// 		expect(function() {
// 			maxInArray([]);
// 		}).to.throw('Array must have at least one element.');
// 	})

// });

// describe('salesTax', function() {
// 	it('subtotal should be a number', function() {
// 		expect(function() {
// 			salesTax('number', 1);
// 		}).to.throw('First argument is not a number.');
// 		expect(function() {
// 			salesTax(1, 'number');
// 		}).to.throw('Second element is not a number.');
// 	});

// 	it ('should not be negative', function() {
// 		expect (function() {
// 			salesTax(-1,.625);
// 		}).to.throw ('First argument should not be a negative number');
// 		expect (function() {
// 			salesTax(.625,-1);
// 		}).to.throw ('Second argument should not be a negative number');
// 	});

// 	it ('should have two arguments', function() {
// 		expect (function() {
// 			salesTax(5,17,22);
// 		}).to.throw ('More than two arguments entered.');
// 		expect (function() {
// 			salesTax(5);
// 		}).to.throw ('Less than two arguments entered.');
// 		expect (function() {
// 			salesTax();
// 		}).to.throw ('No arguments entered.');
// 	});

// 	it ('Second argument should between 0 and 1', function() {
// 		expect (function() {
// 			salesTax(10, 10);
// 		}).to.throw ('Second argument is not between 0 and 1.');
// 		expect (function() {
// 			salesTax(10, 1.75);
// 		}).to.throw ('Second argument is not between 0 and 1.');
// 	});

// 	it ('it should return the total', function() {
// 		expect(salesTax (10, .25)).to.equal(12.5);
// 		expect(salesTax (5, .10)).to.equal(5.5);
// 		expect(salesTax (1000, .05)).to.equal(1050);
// 		expect(salesTax (0, 0)).to.equal(0);
// 		expect(salesTax (0, .25)).to.equal(0);
// 		expect(salesTax (10, 0)).to.equal(10);
// 	});

// });

