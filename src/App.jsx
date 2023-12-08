import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

  
function App() {
  const [foods, setFoods] = useState(foodsJson);
  return (
    <div className="App">
      {foods.map(food => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  );
}

export default App;
