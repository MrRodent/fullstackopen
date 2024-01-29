import { useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Display = ({ text, value }) => {
  return <p>{text} {value}</p>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setValue = (feedback) => {
    const handler = () => {
      if (feedback === "good") {
        setGood(good + 1);
      } else if (feedback === "neutral") {
        setNeutral(neutral + 1);
      } else if (feedback === "bad") {
        setBad(bad + 1);
      }
    }
    return handler
  }

  return (
    <div>
      <Header text={"give feedback"}></Header>
      <Button handleClick={setValue("good")} text="good"></Button>
      <Button handleClick={setValue("neutral")} text="neutral"></Button>
      <Button handleClick={setValue("bad")} text="bad"></Button>
  
      <Header text={"statistics"}></Header>
      <Display text={"good"} value={good}></Display>
      <Display text={"neutral"} value={neutral}></Display>
      <Display text={"bad"} value={bad}></Display>
    </div>
  )
}

export default App