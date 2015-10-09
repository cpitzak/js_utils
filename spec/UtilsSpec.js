describe("Utils", function() {
  var utils = new Utils();

  describe("isInt", function() {
    it("should return true for an positive int", function() {
      expect(utils.isInt(1)).toEqual(true);
    });

    it("should return true for an negative int", function() {
      expect(utils.isInt(-1)).toEqual(true);
    });

    it("should return true for an int that is zero", function() {
      expect(utils.isInt(0)).toEqual(true);
    });

    it("should return false for a double", function() {
      expect(utils.isInt(1.1)).toEqual(false);
    });

    it("should return false for an string that represents an int", function() {
      expect(utils.isInt("5")).toEqual(false);
    });

    it("should return false for an string that represents a double", function() {
      expect(utils.isInt("5.2")).toEqual(false);
    });

    it("should return false for an string that is a word", function() {
      expect(utils.isInt("hello")).toEqual(false);
    });

    it("should return false for an string that has a int and a word", function() {
      expect(utils.isInt("1hello")).toEqual(false);
    });

    it("should return false for a null value", function() {
      expect(utils.isInt(null)).toEqual(false);
    });

    it("should return false for no value passed into method", function() {
      expect(utils.isInt()).toEqual(false);
    });
  });

  describe("merge", function() {
    var map1, map2, map3;

      it("should return the merge of two maps", function() {
        map1 = {"a": 1, "b": 2};
        map2 = {"c": 3, "d": 4};
        map3 = {"a": 1, "b": 2, "c": 3, "d": 4};
        expect(utils.merge(map1,map2)).toEqual(map3);
      });

      it("should return map1 if map2 is null", function() {
        map1 = {"a": 1, "b": 2};
        expect(utils.merge(map1,null)).toEqual(map1);
      });

      it("should return map1 if map2 is undefined", function() {
        map1 = {"a": 1, "b": 2};
        expect(utils.merge(map1)).toEqual(map1);
      });

      it("should return map2 if map1 is null", function() {
        map2 = {"a": 1, "b": 2};
        expect(utils.merge(null, map2)).toEqual(map2);
      });

      it("should return an empty map if no arguments passed in", function() {
        expect(utils.merge()).toEqual({});
      });

    });
});