import { useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return <p>{text} {value} %</p>
  } else {
    return <p>{text} {value}</p>
  }
}

const Statistics = ({ values }) => {
  const countAverage = () => {
    const goodValue = values.goodTotal * 1;
    const badValue = values.badTotal * -1;

    return (goodValue + badValue) / values.all;
  }

  const countPositive = () => {
    return values.goodTotal / values.all * 100;
  }

  if (values.all === 0) {
    return (
      <div>
        <Header text={"statistics"}></Header>
        <p>No feedback given</p>
      </div>
    )
  } else {

    return (
      <div>
      <Header text={"statistics"}></Header>
      <StatisticLine text={"good"} value={values.goodTotal}></StatisticLine>
      <StatisticLine text={"neutral"} value={values.neutralTotal}></StatisticLine>
      <StatisticLine text={"bad"} value={values.badTotal}></StatisticLine>
      <StatisticLine text={"all"} value={values.all}></StatisticLine>
      <StatisticLine text={"average"} value={countAverage()}></StatisticLine>
      <StatisticLine text={"positive"} value={countPositive()}></StatisticLine>
    </div>
   )
  }
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