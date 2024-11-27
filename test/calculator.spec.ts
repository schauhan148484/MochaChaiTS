import calculator from '../src/calculator';

import { expect } from 'chai';
describe ('Test calculator class', ()=>{

    it ('should return sum', ()=>{
        //arrange
        const calc = new calculator();
        //action
        const result = calc.add(2,3);
        //assert
        expect(result).to.equal(5);
    });    
});