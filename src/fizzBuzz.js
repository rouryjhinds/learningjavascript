class FizzBuzz {

  _isDivisibleBy(number, divisor) {
    return number % divisor === 0;
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  play(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "FizzBuzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Fizz";
    }
    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }
    return number;
  }

}