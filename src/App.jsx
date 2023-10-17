import React, { useState, useEffect } from "react";
import axios from "axios"; // Fixed import statement for Axios

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/meals",
    })
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
      });
  }, []);

  return (
    <>
      <div>
        {meals.map((meal) => {
          return (
            <div key={JSON.stringify(meal)}>
              <span>{meal.name}</span>
              <p>{meal.ingredients.join(", ")}</p> 
              <p>{meal.instructions}</p>
              <img src={meal.picture} alt={meal.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
