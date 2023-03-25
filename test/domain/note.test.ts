import { render, screen } from '@testing-library/react';

import { Note } from "../../src/domain/note";
import { NoteType } from "../../src/domain/note-type";

describe('Note suitcase', () => {
  it('formatted note', () => {
    const note = new Note(NoteType.C$);
    expect(note.type).toEqual('C#');
  });

  it('increases interval', () => {
    const note = new Note(NoteType.C$);
    note.increase('1T');
    expect(note.type).toEqual('D#');
  });
});