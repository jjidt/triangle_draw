describe("triangle", function() {
  it("is not a triangle", function() {
    triangle(2,2,8).should.equal(false);
  });
  it("is a triangle", function() {
    triangle(5,5,5).should.equal(true);
  });
});

describe("equilateral", function() {
  it("is equilateral", function() {
    equilateral(6,6,6).should.equal(true);
  });
  it("is not equilateral", function() {
    equilateral(2,6,5).should.equal(false);
  });
});

describe("isosceles", function() {
  it("is isosceles", function() {
    isosceles(5,5,1).should.equal(true);
  });
  it("is not isosceles", function() {
    isosceles(6,6,6).should.equal(false);
  });
});

describe("scalene", function() {
  it("is scalene", function() {
    scalene(8, 4, 7).should.equal(true);
  });
  it("is not scalene", function() {
    scalene(4, 4, 4).should.equal(false);
  });
});
