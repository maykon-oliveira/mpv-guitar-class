import { increaseInterval, decimalDistance } from "../../src/domain/interval";
import { NoteType } from "../../src/domain/note-type";

describe('Interval suitcase', () => {
  it('decimalDistance', () => {
    expect(decimalDistance('2T')).toEqual(4);
    expect(decimalDistance('2TH')).toEqual(5);
    expect(decimalDistance('1T')).toEqual(2);
    expect(decimalDistance('9T')).toEqual(18);
    expect(decimalDistance('9TH')).toEqual(19);
  });

  it('increaseInterval', () => {
    expect(increaseInterval(NoteType.C, '1T')).toEqual(NoteType.D);
    expect(increaseInterval(NoteType.D$, '1T')).toEqual(NoteType.F);
    expect(increaseInterval(NoteType.B, '1T')).toEqual(NoteType.C$);
    expect(increaseInterval(NoteType.G, 'TH')).toEqual(NoteType.G$);
    expect(increaseInterval(NoteType.F, '4TH')).toEqual(NoteType.D);
    expect(increaseInterval(NoteType.C, '12T')).toEqual(NoteType.C);
    expect(increaseInterval(NoteType.C, '12TH')).toEqual(NoteType.C$);
  });
});