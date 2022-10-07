import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState('')
  const [reversedWord, setReversedWord] = useState('')

  const reverse = () =>{
    setReversedWord('')
    let newStr = ''
    for(let i = word.length - 1; i >= 0; i--){
      newStr += word[i]
    }
    setReversedWord(newStr)
  }

  return (
    <div className="App">
      <input 
      placeholder='Enter a word'
      value={word}
      onChange={(e)=>setWord(e.target.value)}
      />
     <button onClick={reverse}>Reverse</button>
     <div>
      <h1>{word}</h1>
      {reversedWord && 
        (reversedWord.toLocaleLowerCase() === word.toLocaleLowerCase()? <h1> is a pallendrome</h1>: <h1>is not a pallendrome</h1>)}
     </div>
     
    </div>
  )
}

export default App
