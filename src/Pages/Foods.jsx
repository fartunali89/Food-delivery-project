
import React from "react";

const Foods = () => {
    const foodList = [
      { name: 'Pizza', description: 'Cheesy and delicious', price: '$12.99' },
      { name: 'Burger', description: 'Juicy and savory', price: '$8.99' },
      { name: 'Sushi', description: 'Fresh and tasty', price: '$15.99' },
    ];
  
    return (
      <div className="foods">
        <h2>Foods Menu</h2>
        <div className="food-list">
          {foodList.map((food, index) => (
            <FoodItem
              key={index}
              name={food.name}
              description={food.description}
              price={food.price}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Foods;