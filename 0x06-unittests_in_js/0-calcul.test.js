const assert = require("assert")
const calculateNumber = require("./0-calcul")

describe('calcule-test', () => {
  describe('sum of two numbers', () => {
    it("should return the 4", ()=>{
      assert.equal(calculateNumber(1, 3), 4)
    })
    it("should return the 5", ()=>{
      assert.equal(calculateNumber(1, 3.7), 5)
    })
    it("should return the 5", ()=>{
      assert.equal(calculateNumber(1.2, 3.7), 5)
    })
    it("should return the 6", ()=>{
      assert.equal(calculateNumber(1.5, 3.7), 6)
    })
  })
})
