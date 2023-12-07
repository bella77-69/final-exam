import React from 'react';

function FoodList({ foods, foodSelected }) {
  return (
    <ul className="list-group">
      {foods.map((food) => (
        <li key={food.id} onClick={() => foodSelected(food)}>
     
  
       {food.name} {food.description && `- ${food.description}`}
        </li>
      ))}
    </ul>
  );
}

export default FoodList;