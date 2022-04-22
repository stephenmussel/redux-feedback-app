import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentsForm from '../CommentsForm/CommentsForm';

function App() {

  return (
    <div className='App'>
      <Header />
      <FeelingForm />
      <UnderstandingForm />
      <SupportedForm />
      <CommentsForm />
    </div>
  );
}

export default App;
