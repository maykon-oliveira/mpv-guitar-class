import { NoteType } from "./note-type";

type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Ts = `${Numbers}T`;
export type Interval = Ts | `${Ts}H` | 'TH';

export function decimalDistance(interval: Interval): number {
    const groups = interval.match(/[0-9]+/);
    let num = (groups ? Number(groups[0]) : 0) * 2;

    if (interval.endsWith('H')) {
        num++;
    }

    return num;
}

export function increaseInterval(firstNote: NoteType, interval: Interval) {
    const notes = Object.values(NoteType);
    const thisIndex = notes.indexOf(firstNote);
    const nextNoteIndex = thisIndex + decimalDistance(interval);
    return notes[nextNoteIndex % notes.length];
}