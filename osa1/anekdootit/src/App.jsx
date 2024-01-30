import { useState } from 'react'
import './App.css'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const AnecdoteDisplay = ({ anecdote, votes }) => {
  return (
    <>
      <p>{anecdote}</p>
      <p id="statistic">votes: {votes}</p>  
    </>
  )
}

const DailyAnecdote = ({ anecdote, votes }) => {
  return (
    <>
      <Header text="Anecdote of the day"></Header>
      <AnecdoteDisplay anecdote={anecdote} votes={votes}></AnecdoteDisplay>
    </>
  )
}

const MostVotedAnecdote = ({ anecdote, votes }) => {
  if (votes === 0) return;
  
  return (
    <>
      <Header text="Anecdote with most votes"></Header>
      <AnecdoteDisplay anecdote={anecdote} votes={votes}></AnecdoteDisplay>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // Array initialized with zeroes
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);
    setSelected(randomIndex);
  }

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  let mostVotes = 0;
  const mostVotedAnecdote = () => {
    // Find the one with most votes
    votes.forEach(vote => {
      if (vote > mostVotes) {
        mostVotes = vote;
      }
    });

    const index = votes.indexOf(mostVotes);
    return anecdotes[index];
  }

  return (
    <div>
      <DailyAnecdote anecdote={anecdotes[selected]} votes={votes[selected]}></DailyAnecdote>
      <Button handleClick={vote} text="Vote"></Button>
      <Button handleClick={randomAnecdote} text="Next"></Button>
      <MostVotedAnecdote anecdote={mostVotedAnecdote()} votes={mostVotes}></MostVotedAnecdote>
    </div>
  )
}

export default App