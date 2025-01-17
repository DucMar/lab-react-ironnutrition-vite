import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

  
function App() {
  const [foods, setFoods] = useState(foodsJson);
  return (
    <div className="App">
      <AddFoodForm />
      {foods.map(food => (
      <FoodBox key={food.id} food={food} onDelete={handleClick}/> 
))}
    </div>
  );
}

export default App;
