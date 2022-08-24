import './App.css' 
import data from '../data'
import React, {useState, useEffect} from "react"


function App() {
  // By default, the first character is the first data on the data array.
  const [character, setCharacter] = useState(data[0])

  // A counter is created to iterated the array of data.
  const [counter, setCounter] = useState(0)

  // The character displayed on the screen is based on the counter.
  // The state containing the data will be changed only if the value of counter changes.
  // Thus, if the value of the counter changes, the data displayed will change.
  useEffect(() => {
    setCharacter(data[counter])
  }, [counter])

  // If an arrow is clicked and counter's value < 5, the counter value will increase of 1.
  function nextCharacter() {
    if (counter < 5) {
      setCounter(counter + 1)
    }
  }

  // If an arrow is clicked and counter's value > 0, the counter value will decrease of 1.
  function previousCharacter() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  // A counter to avoid the audio to be played several times before it ends.
  // If the function is called, play ++, and play plays itself only if it equals 1
  let play = 0
  
  function playMusic() {

    play ++
    if (play == 1) {
      var audio = new Audio(character.music)
      audio.play() 
    }

    // After 3 seconds, you can listen to the audio again
    setTimeout(() => {
      play = 0 
    }, 3000)
  }


  return (
    <div className="App">
      <div className="main">
        <img src="../img/logo.png" alt="logo JBA" />
        <h1>{character.name}</h1>

        <img
          src="../svg/arrow_left.svg"
          alt="left arrow"
          className="arrow_left"
          onClick={previousCharacter}
        />

        <img
          src={character.character}
          alt="JBA main characters"
          className="character"
        />

        <img
          src="../svg/arrow_right.svg"
          alt="left rigth"
          className="arrow_right"
          onClick={nextCharacter}
        />
        <img className="music" onClick={playMusic} src="../svg/sound_on.svg" />
      </div>
    </div>
  )
}

export default App
