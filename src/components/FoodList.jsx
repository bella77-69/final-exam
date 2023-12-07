import React from "react";

function FoodList({ foods, foodSelected, search }) {
  //function to highlight the search text the user imputs
  //stackoverflow for help on this one!
  const highlightSearch = (text) => {
    if (search) {
      const regex = new RegExp(`(${search})`, "gi");
      return text
        .split(regex)
        .map((word, i) =>
          regex.test(word.toLowerCase()) ? <mark key={i}>{word}</mark> : word
        );
    } else {
      return text;
    }
  };

  return (
    <ul className="list-group">
      {foods.map((food) => (
        <li key={food.id} onClick={() => foodSelected(food)}>
          {highlightSearch(food.name)}
          <span className="mx-1"> - {highlightSearch(food.description)}</span>
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
