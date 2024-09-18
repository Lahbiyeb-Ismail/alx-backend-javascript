const assert = require("assert")
const calculateNumber = require("./1-calcul")

describe('basic calculator functionality', () => {
  describe('sum the two numbers', () => {
    it("should return the 6", ()=>{
      assert.equal(calculateNumber("SUM", 1.4, 4.5), 6)
    })
  })

  describe('subtract the two numbers', () => {
    it("should return the -4", ()=>{
      assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4)
    })
  })

  describe('divide the two numbers', () => {
    it("should return the 0.2", ()=>{
      assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2)
    })
  })

  describe('divide the two numbers', () => {
    it("should return the 'Error'", ()=>{
      assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error")
    })
  })
})
