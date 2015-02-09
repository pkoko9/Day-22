var expect = chai.expect;

describe('max', function (){
	it('should not allow non-numeric input', function (){
		expect(function(){
			max ('a',1)
		}).to.throw('The first argument must be a number.');
		expect(function(){ max ('',1) }).to.throw('The first argument must be a number.');
		expect(function(){ max (1,'') }).to.throw('The second argument must be a number.');
		expect(function(){ max (1,'b') }).to.throw('The second argument must be a number.');
	});
	it('Should return the max', function () {
		expect(max(1,2)).to.equal(2);
		expect(max(2,1)).to.equal(2);
		expect(max(38,87)).to.equal(87);
		expect(max(-4,12)).to.equal(12);
		expect(max(-5,-17)).to.equal(-5);
		expect(max(.23, .87)).to.equal(.87);
	});
});
