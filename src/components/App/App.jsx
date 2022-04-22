import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import FeelingForm from '../FeelingForm/FeelingForm';

function App() {

  return (
    <div className='App'>
      <Header />
      <FeelingForm />
    </div>
  );
}

export default App;
