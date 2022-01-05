import React, { useState } from 'react'

const Header = () => <h1>Give your feedback!</h1>

const Button = (props) => {
  return(
  <button onClick={props.onClick}>{props.name}</button>
  )
}

const Statistics = (props) => {

  const total = props.bad + props.neutral + props.good
  const average = (props.good + props.bad*(-1))/total
  const positive = (props.good/total)*100

  if (total === 0) {
    return(<div>
      <h1>No data given</h1>
    </div>)
  }
  if (total != 0) {
    return(<div>
      <h1>Statistics</h1>
      <ul>
        <li><p>Good: {props.good}</p></li>
        <li><p>Neutral: {props.neutral}</p></li>
        <li><p>Bad: {props.bad}</p></li>
        <li><p>Total: {total}</p></li>
        <li><p>Average: {average.toFixed(2)}</p></li>
        <li><p>Positive: {positive.toFixed(2)}%</p></li>
    
      </ul></div>)
    
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Button onClick={() => setGood(good + 1)} name={"good"} value={good}/>
      <Button onClick={() => setNeutral(neutral + 1)} name={"neutral"} value={neutral}/>
      <Button onClick={() => setBad(bad + 1)} name={"bad"} value={bad}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
