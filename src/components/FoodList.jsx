import React from "react";

function FoodList({ foods, foodSelected, search }) {
  //function to highlight the search text the user imputs
  //stackoverflow for help on this one!
  const highlightSearch = (text) => {
    // Check for seach 
    if (search) {
      // Create a regular expression 
      const regex = new RegExp(`(${search})`, "gi");
      // Split the text into an array of words
      return text
        .split(regex)
        // Map over each word in the array
        .map((word, i) =>
          // Check if the word matches the search 
          regex.test(word.toLowerCase()) ? (
            // If it does match, put the word in a <mark> for highlighting
            <mark key={i}>{word}</mark>
          ) : (
            // If not matched, return the original word
            word
          )
        );
    } else {
      // If no search term is provided, return the original text without highlighting
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
