import { useState } from "react"


const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => () => {
    console.log('hello', who)
  }
  
  const setToValue = (newValue) => () => {
    console.log('Value now:', newValue)
    setValue(newValue)
  }

  return (
    <div className="">
      {value}
      <button onClick={setToValue(0)}>reset to zero</button>
      <button onClick={setToValue(value + 1)}>Add one</button>
      <button onClick={setToValue(1000)}>set to a thousand</button>
      <button onClick={hello('matt')}>hello</button>
    </div>
    
  )
}


export default App