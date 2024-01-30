import { useState } from 'react'
import './App.css'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({ votes }) => {
  return <p id="statistic">votes: {votes}</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // Array initialized with zeroes
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  console.log(selected, votes);

  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }

  const vote = () => {
    console.log("voted", selected);
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <div>
      <Header text="Anecdote of the day"></Header>
      <p>{anecdotes[selected]}</p>
      <StatisticLine votes={votes[selected]}></StatisticLine>
      <Button handleClick={vote} text="Vote"></Button>
      <Button handleClick={randomAnecdote} text="Next"></Button>
    </div>
  )
}

export default App