import { distance } from "../../src/domain/interval";

describe('Interval suitcase', () => {
  it('distance', () => {
    expect(distance('2T')).toEqual(4);
    expect(distance('2TH')).toEqual(5);
    expect(distance('1T')).toEqual(2);
    expect(distance('9T')).toEqual(18);
    expect(distance('9TH')).toEqual(19);
  });
});