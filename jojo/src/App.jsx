import './App.css' 
import data from '../data'
import React, {useState, useEffect} from "react"

function App() {

  const [character, setCharacter] = useState(data[0])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCharacter(data[counter])
  }, [counter])

  console.log(counter)

  function nextCharacter() {
    if(counter < 5){
      setCounter(counter + 1) 
    }
  }

  function previousCharacter(){
    if(counter > 0){
      setCounter(counter - 1) 
    }
  }

  return (
    <div className="App">
      <div className='main'>
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
      </div>
    </div>
  )
}

export default App
