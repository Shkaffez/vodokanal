import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <NavBar />
        <AppRouter /> */}
    </BrowserRouter >
  );
}

export default App;
