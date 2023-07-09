

const Part = ({ name, exercises }) => {
  return (
    <li>{name}: {exercises} exercises</li>
  )
}

const Course = ({ course }) => {
  return (
    <div className="">
      <h1>{course.name}</h1>
      <ul>
        {
          course.parts.map(part =>
            <Part
              key={part.id}
              name={part.name}
              exercises={part.exercises}
            />
        )}
      </ul>
      <p>Total:
        {
          course.parts.map(part =>
            part.exercises).reduce((p, c) => p + c)
        }
      </p>
    </div>
  )
}

export default Course