import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root';
import IntervalExercise from './routes/IntervalExercise';
import Pentatonica from './routes/Pentatonica';

const router = createBrowserRouter([
  {
    path: "/mpv-guitar-class/",
    element: <Root />,
  },
  {
    path: "/mpv-guitar-class/intervalo-exe",
    element: <IntervalExercise />,
  },
  {
    path: "/mpv-guitar-class/pentatonica",
    element: <Pentatonica />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);