const Part = ({ name, exercises }) => {
  return (
    <li>{name}: {exercises} exercises</li>
  )
}

const Courses = ({ course }) => {
  return (
    <div className="">
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
      </ul>
      <p>Total: {
        course.parts.map(part => part.exercises).reduce((p, c) => p + c)
        }</p>
    </div>
  )
}

const App = () => {
  const courseList = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  
  console.log("app:", courseList);
  return <Courses course={courseList} />
}

export default App