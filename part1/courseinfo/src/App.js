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
      { items.map(course => <p key={course.name}>{course.name} - no. of exercises: {course.exercises}</p>) }
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
  const course = {
    title : 'Half Stack application development',
    parts : [
      {name: 'Fundamentals of React', exercises: 10},
      {name: 'Using props to pass data', exercises: 7},
      {name: 'State of a component', exercises: 14}
    ]
  }

  return (
    <div>
      <Header course={course.title} />
      <Content items={course.parts} />
      <Total items={course.parts} />
    </div>
  )
}

export default App;
