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

describe('maxOfThree', function() {
	it('should not allow non-numberic input', function(){
		expect (function() {
			maxOfThree ('a', 1, 2)
		}).to.throw('The first argument must be a number.');
		expect(function() { maxOfThree(28, 'b', 5) }).to.throw('The second argument must be a number.');
		expect(function() { maxOfThree(14, 7, 'c') }).to.throw('The third argument must be a number.');
		expect(function() { maxOfThree(14, 7) }).to.throw('The third argument must be a number.');
 });
 it('should return the max', function(){
 	expect(maxOfThree(10,20,30)).to.equal(30);
 	expect(maxOfThree(-10,10,20)).to.equal(20);
 	expect(maxOfThree(0.5,0.7,0)).to.equal(0.7);
 	expect(maxOfThree(-10,-20,-30)).to.equal(-10);
 });
});

/