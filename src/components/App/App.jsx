import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';

function App() {

  return (
    <div className='App'>
      <Header />
      <FeelingForm />
      <UnderstandingForm />
    </div>
  );
}

export default App;
