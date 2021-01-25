describe('FizzBuzz', function() {

  let fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('return true if number is', function() {  

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('return false if number is not', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

  describe('return true if number is', function() {  

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('return false if number is not', function() {

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

  });

  describe('return true if number is', function() {  

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('return false if number is not', function() {  

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('playing fizzbuzz', function() {

    it('return "FizzBuzz" when number is divisible by 15', function() {
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });
    it('return "Fizz" when number is divisible by 3', function() {
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });
    it('return "Buzz" when number is divisible by 5', function() {
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });

  });


});