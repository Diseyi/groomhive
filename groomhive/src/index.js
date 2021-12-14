import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './pages/about/About';
import Sponsorship from './pages/sponsorship/Sponsorship';
import HiveWoman from './pages/hiveWoman/HiveWoman';
import HireTalent from './pages/hireTalent/HireTalent';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/sponsorship" element={<Sponsorship />} />
      <Route path="/hivewoman" element={ <HiveWoman />} />
      <Route path="/hiretalent" element={ <HireTalent />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
