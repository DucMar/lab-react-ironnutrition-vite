import React, { useState } from 'react';
import FoodBox from './FoodBox';

const AddFoodForm = () => {

    const [foods, setFoods] = useState({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });

    const addNewFood = (food) => {
    const updatedFoods = [...foods, food];
    setFoods(updatedFoods);
};
return (
    <div>
      <button>Create</button>
      <AddFoodForm addNewFood={addNewFood} /> 
      {foods.map(food => {
        return <FoodBox key={food.id} food={food} />;
      })}
    </div>
  );
}

export default AddFoodForm;
