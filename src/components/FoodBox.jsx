import React from 'react';

const FoodBox = ({food, onDelete}) => {

  const totalCalories = food.calories * food.servings;
  const handleClick = () => {
    onDelete(food.id);
  };

  return (
    <div>
    <p>{food.name}</p>
  
    <img src={food.image} alt={food.name} />
  
    <p>Calories: {food.calories}</p>
    <p>Servings: {food.servings}</p>
  
    <p>
      <b>Total Calories:</b> <span>{totalCalories}</span>kcal
    </p>
 
    <button onClick={handleClick}>Delete</button>

   </div>  
    );


};
    
 export default FoodBox;