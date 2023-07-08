import { logRoles } from "@testing-library/react";
import { useState } from "react";

const Header = ({ text }) => (
    <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  
  const [goodNo, setGoodNo] = useState(0)
  const [neutralNo, setNeutralNo] = useState(0)
  const [badNo, setBadNo] = useState(0)

  return (
    <div className="App">
      <Header text="Give feedback" />
      <Button handleClick={() => setGoodNo(goodNo + 1)} text="Good" />
      <Button handleClick={() => setNeutralNo(neutralNo + 1)} text="Neutral" />
      <Button handleClick={() => setBadNo(badNo + 1)} text="Bad" />
      <Header text="Statistics" />
      <p>Good: {goodNo}</p>
      <p>Neutral: {neutralNo}</p>
      <p>Bad: {badNo}</p>
    </div>
  );
}

export default App;
