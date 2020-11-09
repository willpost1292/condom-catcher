import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import SnakeBoard from './SnakeBoard.js';
import GameOver from "./GameOver";
import getFacts from "./getFacts";

function refreshPage() {
  window.location.reload();
}

function App() {
  const [points, setPoints] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="App">
      <h1>Condom Catcher!</h1>
      <h3>A snake-like game for protecting your snake! (use arrow keys to play) <br/> Current points: {points}</h3>
      { !isPlaying ? <GameOver score={points} btnHandler={refreshPage} facts={getFacts()}/> : null }

      <SnakeBoard
        points={points}
        setPoints={setPoints}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <br/>
      <p >By Will Post. Facts from Dr. Vallin's WSBIOL 350 class and <br/>
        <a href="https://www.plannedparenthood.org/about-us/newsroom/press-releases/ten-little-known-facts-about-condoms-planned-parenthood">
           Planned Parenthood.</a>
      </p>

      </div>
  );
}

export default App;
