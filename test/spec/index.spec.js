import { expect } from 'chai';
import mangoHash from '../../src';

const parameters = {
  input: 'Raul Mangolin',
  output: 'HzS1oPOALJ5ao2kcot=='
}


describe('Mango Hash', () => {
  describe('Mango Hash Encode', () => {
    it('Expect to encode a basic string', () => {
      let result = mangoHash.encode(parameters.input);
      expect(result).to.be.a('string');
      expect(result).to.be.equal(parameters.output);
    });

    it('Expect to encode a array', () => {
      const input = [1, 2, 3];
      const expected = 'ZFjlYQZ=';
      let result = mangoHash.encode(input);
      expect(result).to.be.a('string');
      expect(result).to.be.equal(expected);
    });
    it('Expect to encode a object', () => {
      const expected = 'J29vnzIwqPOCLzcyL3Eq';
      let result = mangoHash.encode({ input: parameters.input});
      expect(result).to.be.a('string');
      expect(result).to.be.equal(expected);
    });

  });

  describe('Decode', () => {
    it('Expect to decode a hash string', () => {
      let result = mangoHash.decode(parameters.output);
      expect(result).to.be.a('string');
      expect(result).to.be.equal(parameters.input);
    });

    it('Expect to decode a array', () => {
      const input = 'ZFjlYQZ=';
      const expected = '1,2,3';
      let result = mangoHash.decode(input);
      expect(result).to.be.equal(expected);
    });

    it('Expect to decode a object', () => {
      const input = 'J29vnzIwqPOCLzcyL3Eq';
      let result = mangoHash.decode(input);
      console.log("result", result);
      expect(result).to.be.a('string');
    });


  });

})
