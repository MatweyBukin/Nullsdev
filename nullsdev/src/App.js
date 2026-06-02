import './css/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import {createContext, useState} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Portfolio from './components/Portfolio';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Menu/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;
