import { NoteType } from "./note-type";

export const IntervalType = ["1T", "2T", "3T", "4T", "5T", "6T", "7T", "8T", "9T", "10T", "11T", "12T", "1TH", "2TH", "3TH", "4TH", "5TH", "6TH", "7TH", "8TH", "9TH", "10TH", "11TH", "12TH", "TH"];
export type Interval = typeof IntervalType[number];

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