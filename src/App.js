import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameStory from './Components/GameStory/GameStory';
import PlayingScreen from './Components/PlayingScreen/PlayingScreen';
import ResultScreen from './Components/ResultScreen/ResultScreen';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/introduction" component={GameStory} />
        <Route path="/playgame" component={PlayingScreen} />
        <Route path="/results" component={ResultScreen} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
