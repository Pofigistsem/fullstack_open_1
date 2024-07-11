import { useState } from 'react'


const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({value, text, units}) =>{
  return (
  <tr>
    <td>{text}: {Math.round(10* value)/10} {units}</td>
  </tr>
  )

}


const Statistics = ({reviews}) => {
  const {good, neutral, bad} = reviews
  
  if (good || neutral || bad)
  return (
  <table style={{tableLayout: "fixed"}}>
    <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good+neutral+bad} />
        <StatisticsLine text="average" value={(good-bad)/(good+neutral+bad)} />
        <StatisticsLine text="positive" value={(good/(good+neutral+bad))*100} units={"%"}/>
    </tbody>
  </table>
  )

  return <p>No feedback given</p>
}


const App = () => {
  // state from each button
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)

  const reviews = {
    'good': good,
    'neutral': neutral,
    'bad': bad,

  }

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      <h2>statistics</h2>
      <Statistics reviews={reviews} />
    </div>
  )
}

export default App
