import { useState } from 'react'


const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Feature = ({handleVote, handleNext, featured, anecdotes, points}) => {
  return (
    <>
    <h2>Anecdote of the day</h2>
    <p>{anecdotes[featured]}</p>
    <p>has {points[featured]} votes</p>
    <Button handleClick={handleVote} text="vote" />
    <Button handleClick={handleNext} text="next anecdote" />
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(8))

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const findMax = (arr) => {
    let maxIndex = 0 // set max value index to 0
    for (let i = 1; i < arr.length; i++) { // loop through array starting at 2nd item
      if (arr[i] > arr[maxIndex]) { // if bigger than maxIndex so far -> change
        maxIndex = i;
      }
    }
    return maxIndex // return value
  }


  return (
    <div>
      <Feature handleVote={handleVote} handleNext={handleNext} points={points} anecdotes={anecdotes} featured={selected}/>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[findMax(points)]}</p>
    </div>
  )
}

export default App