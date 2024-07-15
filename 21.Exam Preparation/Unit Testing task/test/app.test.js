import { assert, expect } from "chai";
import { weddingDay } from "../03.Wedding.js";


describe('General weddingDay{} object testing',()=>{

    describe('Test with invalid data. pickVanue method',()=>{

        it('Testing case of submitted invalid parameters or empty string',()=>{

            expect(()=> weddingDay.pickVenue(1, 2, '')).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue("1", 2, '')).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(1, '2', '')).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(1, '', '')).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue('', '', '')).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(null, 1, '')).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(null, 1, undefined)).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(10, 1, undefined)).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(10, 1, ["sofia"])).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(10, [1], ["sofia"])).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue([10], [1], ["sofia"])).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(['10'], ['1'], ["sofia"])).to.throw("Invalid Information!")
            expect(()=> weddingDay.pickVenue(['10'], ['1'], {name: "sofia"})).to.throw("Invalid Information!")
        })

        it('test pickVenue method with invalid range numbers',()=>{
            expect(weddingDay.pickVenue(149, 120, "Varna")).to.equal("This venue does not meet your requirements!")
            assert.equal(weddingDay.pickVenue(150, 121, "Varna"), "This venue does not meet your requirements!")
            assert.equal(weddingDay.pickVenue(130, 121, "Varna"), "This venue does not meet your requirements!")
        })

        it('test with invalid location',()=>{
            expect(()=> weddingDay.pickVenue(20, 110, "Sofia")).to.throw("The location of this venue is not in the correct area!")
        })
    })

    describe("Test with valid data. pickVanue method",()=>{

        it('Testing case of submitted valid parameters for pickVenue method',()=>{
            let capacity = 150
            let pricePerGuest = 120
            expect(weddingDay.pickVenue(150, 120, "Varna")).to.equal(`This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`)
        })
    })

    
    describe("Test with invalid data. otherSpendings method",()=>{

        it("Testing case of submitted invalid parameters",()=>{
            expect(()=> weddingDay.otherSpendings([], {}, false)).to.throw("Invalid Information!")
            expect(()=> weddingDay.otherSpendings({}, {}, false)).to.throw("Invalid Information!")
            expect(()=> weddingDay.otherSpendings(null, null, null)).to.throw("Invalid Information!")
            expect(()=> weddingDay.otherSpendings({}, {}, true)).to.throw("Invalid Information!")
            expect(()=> weddingDay.otherSpendings(1, 2, 3)).to.throw("Invalid Information!")
            expect(()=> weddingDay.otherSpendings(1, 2, undefined)).to.throw("Invalid Information!")
            expect(()=> weddingDay.otherSpendings([], 2, undefined)).to.throw("Invalid Information!")
        })
    })


    describe("Test with valid data. otherSpendings method",()=>{

        it("should cost 0 if no decoration and photography is given",()=>{
            expect(weddingDay.otherSpendings([], [], true)).to.equal(`You spend ${0}$ for wedding decoration and photography with 15% discount!`)
        })

    })

    describe("Test two options for weddingDecoration and photography",()=>{

        it("test without 15% discount",()=>{

            assert.equal(weddingDay.otherSpendings(['flowers'], ['Fabric drapes and curtains'], false), `You spend ${500}$ for wedding decoration and photography!`)
            assert.equal(weddingDay.otherSpendings(['flowers'], ['pictures'], false), `You spend ${1200}$ for wedding decoration and photography!`)
            assert.equal(weddingDay.otherSpendings(['flowers'], ['video'], false), `You spend ${1800}$ for wedding decoration and photography!`)
            assert.equal(weddingDay.otherSpendings(['video'], ['pictures'], false), `You spend ${700}$ for wedding decoration and photography!`)
        })

        it("test with 15% discount",()=>{

            assert.equal(weddingDay.otherSpendings(['flowers'], ['video'], true), `You spend ${1800 * 0.85}$ for wedding decoration and photography with 15% discount!`)
            assert.equal(weddingDay.otherSpendings(['flowers'], ['pictures'], true), `You spend ${1200 * 0.85}$ for wedding decoration and photography with 15% discount!`)
            assert.equal(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['pictures'], true), `You spend ${1100 * 0.85}$ for wedding decoration and photography with 15% discount!`)
            assert.equal(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true), `You spend ${1700 * 0.85}$ for wedding decoration and photography with 15% discount!`)
        })
    })

    describe("Test tableDistribution method",()=>{

        it("test with less than 6 people on table",()=>{
            assert.equal(weddingDay.tableDistribution(50, 10), `There is only ${5} people on every table, you can join some tables.`)
        })

        it("test with more than 6 people on table",()=>{
            assert.equal(weddingDay.tableDistribution(200, 20), `You have ${20} tables with ${10} guests on table.`)
        })

        describe("Test with invalid data input",()=>{

            it("negative number or string value",()=>{
                expect(()=> weddingDay.tableDistribution(-100, 10)).to.throw("Invalid Information!")
                expect(()=> weddingDay.tableDistribution(-200, -10)).to.throw("Invalid Information!")
                expect(()=> weddingDay.tableDistribution(200, -10)).to.throw("Invalid Information!")
                expect(()=> weddingDay.tableDistribution(200, 'mocha')).to.throw("Invalid Information!")
                expect(()=> weddingDay.tableDistribution('chai', 10)).to.throw("Invalid Information!")
            })
        })
    })
})