import { useState } from "react";

export default function RadioGames() {
  const options = ["Cricket", "Football", "Chess", "Ludo"];
  const days = ["weekday", "weekend"];

  const [game, setGame] = useState("");
  const [day, setDay] = useState("");
  return (
    <div className="App">
      <h1>Choose a Game to Play</h1>
      {options.map((option) => (
        <div>
          <input
            type="radio"
            name="option"
            value={option}
            onChange={(event) => setGame(event.target.value)}
          />
          <label htmlFor="option"> {option}</label>
        </div>
      ))}
      <h1>Choose a Day</h1>
      {days.map((day) => (
        <div>
          <input
            type="radio"
            name="day"
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
          <label htmlFor="day"> {day}</label>
        </div>
      ))}

      {game && day && (
        <h2>
          {game} On {day}
        </h2>
      )}
    </div>
  );
}
