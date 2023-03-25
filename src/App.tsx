import { useEffect, useState } from 'react'
import { NoteType } from './domain/note-type'
import { Interval, IntervalType, increaseInterval } from './domain/interval'

import './App.css'

function App() {
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
    <div className="App">
      <h1>Exercício de Escalas</h1>
      <div className="card">
        <button onClick={refresh}>
          Atualizar
        </button>
        <h3>{currentNote} + {formatInterval(interval)}</h3>
      </div>
      <div className="parent">
        {Object.values(NoteType).map((note, index) => <button key={index} onClick={() => handleAnswer(note)}>{note}</button>)}
      </div>
    </div>
  )
}

export default App
