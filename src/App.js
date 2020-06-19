import React from 'react';
import GameStory from './Components/GameStory/GameStory';
import PlayingScreen from './Components/PlayingScreen/PlayingScreen';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <GameStory />
      {/* <PlayingScreen /> */}
      <Footer />
    </div>
  );
};

export default App;
