import React from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';

import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path="/" component={FeelingForm} />
        <Route exact path="/understanding" component={UnderstandingForm}/>
        <Route exact path="/supported" component={SupportedForm}/>
        <Route exact path="/comments" component={CommentsForm}/>
        <Route exact path="/review" component={ReviewFeedback}/>
        <Route exact path="/thankyou" component={ThankYou}/>
      </Router>
     
    </div>
  );
}

export default App;
