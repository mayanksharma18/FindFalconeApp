import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import GameStory from './Components/GameStory/GameStory';
import PlayingScreen from './Components/PlayingScreen/PlayingScreen';
import ResultScreen from './Components/ResultScreen/ResultScreen';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={GameStory} />
        <Route path="/gamestory" component={GameStory} />
        <ErrorBoundary>
          <Route path="/playgame" component={PlayingScreen} />{' '}
        </ErrorBoundary>
        <Route path="/results" component={ResultScreen} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
