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

const PercentageDisplay = ({ text, value }) => {
  return <p>{text} {value} %</p>
}

const Statistics = ({ values }) => {
  const countAverage = () => {
    if (values.all === 0) return 0;

    const goodValue = values.goodTotal * 1;
    const badValue = values.badTotal * -1;

    return (goodValue + badValue) / values.all;
  }

  const countPositive = () => {
    if (values.all === 0) return 0;

    return values.goodTotal / values.all * 100;
  }

  return (
    <div>
      <Header text={"statistics"}></Header>
      <Display text={"good"} value={values.goodTotal}></Display>
      <Display text={"neutral"} value={values.neutralTotal}></Display>
      <Display text={"bad"} value={values.badTotal}></Display>
      <Display text={"all"} value={values.all}></Display>
      <Display text={"average"} value={countAverage()}></Display>
      <PercentageDisplay text={"positive"} value={countPositive()}></PercentageDisplay>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const values = {
    goodTotal: good,
    neutralTotal: neutral,
    badTotal: bad,
    all: good + neutral + bad
  }

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
      <Statistics values={values}></Statistics>
    </div>
  )
}

export default App