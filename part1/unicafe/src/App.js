import { useState } from "react";

const Header = ({ text }) => (
    <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  
  const [goodNo, setGoodNo] = useState(0)
  const [neutralNo, setNeutralNo] = useState(0)
  const [badNo, setBadNo] = useState(0)

  const [totalNo, setTotal] = useState(0)
  const [averageNo, setAverage] = useState(0)
  const [positiveNo, setPositive] = useState(0)
  
  
  const addGood = () => {
    const newGood = goodNo + 1
    const total = badNo + neutralNo + newGood
    const positive = calcPositive(total, neutralNo + newGood)
    setPositive(positive)
    setGoodNo(newGood)
    setTotal(total)
    setAverage(calculateAverage(total, badNo, newGood))
  }

  const addNeutral = () => {
    const newNeutral = neutralNo + 1
    const total = badNo + newNeutral + goodNo
    const positive = calcPositive(total, newNeutral + goodNo)
    setNeutralNo(newNeutral)
    setPositive(positive)
    setTotal(total)
    setAverage(calculateAverage(total, badNo, goodNo))
  }

  const addBad = () => {
    const newBad = badNo + 1
    const total = newBad + neutralNo + goodNo
    const positive = calcPositive(total, neutralNo + goodNo)
    setBadNo(newBad)
    setPositive(positive)
    setTotal(total)
    setAverage(calculateAverage(total, newBad, goodNo))
  }
  
  const calculateAverage = (total, bad, good) => (
    ((bad * -1) + (good * 1)) / total
  )

  const calcPositive = (total, good) => (
    (good / total) * 100
  )
  
  return (
    <div className="App">
      <Header text="Give feedback" />
      <Button handleClick={addGood} text="Good" />
      <Button handleClick={addNeutral} text="Neutral" />
      <Button handleClick={addBad} text="Bad" />
      <Header text="Statistics" />
      <p>Good: {goodNo}</p>
      <p>Neutral: {neutralNo}</p>
      <p>Bad: {badNo}</p>
      <p>Total: {totalNo}</p>
      <p>Positive: {positiveNo} %</p>
      <p>Average: {averageNo}</p>
    </div>
  );
}

export default App;
