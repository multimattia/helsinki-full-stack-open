const Header = ( {course} ) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ( {items} ) => {
  return (
    <div className="content">
      { items.map(course => <p>{course.name} - no. of exercises: {course.exercises}</p>) }
    </div>
  )
}

const Total =( {items} ) => {
  return (
    <div className="total">
      <p>Total length: {items.map(i => i.exercises).reduce((p, n) => p + n, 0)} </p>
    </div>

  )
}

const App = () => {
  const courseTitle = 'Half Stack application development'
  
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ]
  
  const list = [
    {exercises: 1},
    {exercises: 2},
    {exercises: 3}
  ]

  return (
    <div>
      <Header course={courseTitle} />
      <Content items={parts} />
      <Total items={parts} />
    </div>
  )
}



export default App;
