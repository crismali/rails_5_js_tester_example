describe("Testing", function() {
  it("is going so smoothly", function() {
    expect(true).to.equal(true);
  });

  it("is not going so smoothly", function() {
    expect(true).to.equal(false);
  });
});

describe('Order form errors', function() {
  beforeEach(function() {
    MagicLamp.load("orders/form");
  });

  it('depends on the dom', function() {
    expect($('#error_explanation').length).to.equal(1);
  });
});
