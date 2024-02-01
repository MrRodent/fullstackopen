const Header = ({course}) => {
  return <h1>{course.name}</h1>
}

const Part = ({part, exercises}) => {
  return <p>{part} {exercises}</p>
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} part={part.name} exercises={part.exercises}></Part> 
      )}
    </div>
  )
}

const Total = ({course}) => {
  const total = course.parts.reduce((acc, cur) => acc + cur.exercises, 0)
  return <p><b>Number of exercises {total}</b></p>
}

const Course = ({ course }) => {
  return ( 
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div> 
  )
}
 
export default Course