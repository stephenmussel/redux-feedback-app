import React from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path="/" component={FeelingForm} />
        <Route exact path="/understanding" component={UnderstandingForm}/>
        <Route exact path="/support" component={SupportForm}/>
        <Route exact path="/comments" component={CommentsForm}/>
        <Route exact path="/review" component={ReviewFeedback}/>
        <Route exact path="/thankyou" component={ThankYou}/>
        <Route exact path="/admin" component={Admin}/>
      </Router>
     
    </div>
  );
}

export default App;
