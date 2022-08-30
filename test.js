describe("pow", () => {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(2, 3), 8 );
      assert.equal(pow(2, 4), 16);
      assert.equal(pow(2, 0), 1);
    });
    it("raises to n-th part 2 power", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(2, 2), 4);
        assert.equal(pow(2, 4), 16);
        assert.equal(pow(2, 5), 32);
      });
  
});