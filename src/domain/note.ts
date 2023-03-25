import { distance, Interval } from "./interval";
import { NoteType } from "./note-type";

export class Note {
    private _type: NoteType;

    constructor(type: NoteType) {
        this._type = type;
    }

    increase(interval: Interval) {
        const notes = Object.keys(NoteType)
        console.log(notes)

        this._type = NoteType.D$;
    }


    public get type(): NoteType {
        return this._type;
    }

}