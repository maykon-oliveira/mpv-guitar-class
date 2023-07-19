import { useEffect, useState } from 'react'
import { NoteType } from '../domain/note-type';
import { Interval, IntervalType, increaseInterval } from '../domain/interval';

function IntervalExercise() {
    const [currentNote, setCurrentNote] = useState(NoteType.C);
    const [interval, newInterval] = useState<Interval>('1T');
  
    const sortNote = () => Object.values(NoteType).sort(() => 0.5 - Math.random())[0];
    const sortInterval = () => Object.values(IntervalType).sort(() => 0.5 - Math.random())[0];
  
    const refresh = () => {
      setCurrentNote(sortNote());
      newInterval(sortInterval());
    }
  
    const handleAnswer = (note: NoteType) => {
      const result = increaseInterval(currentNote, interval)
  
      if (result === note) {
        alert("Acertou");
      } else {
        alert(`Errou, a respota seria ${result}.`);
      }
  
      refresh()
    }
  
    useEffect(() => {
      refresh();
    }, []);
  
    const formatInterval = (inter: Interval) => `${inter}`.replace('T', ' Tom').replace('H', ' e Meio');
  
    return (
      <div className="flex flex-col p-5">
        <h1 className="text-center text-lg font-bold">Exercício de Escalas</h1>
        <div className="p-8 text-center">
          <button className="items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded" onClick={refresh}>
            Novo Intervalo
          </button>
          <h3 className="pt-3">{currentNote} + {formatInterval(interval)}</h3>
        </div>
        <div className="grid grid-cols-4 gap-3 max-w-md">
          {Object.values(NoteType).map((note, index) => <button className="text-white bg-indigo-500 py-2 focus:outline-none hover:bg-indigo-600 rounded" key={index} onClick={() => handleAnswer(note)}>{note}</button>)}
        </div>
      </div>
    )
  }
  
  export default IntervalExercise