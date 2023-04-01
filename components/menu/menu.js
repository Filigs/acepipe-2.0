import React from "react";

const categories = [
  { id: 1, name: "Burgers", description: "Our famous burgers" },
  { id: 2, name: "Fries", description: "Crispy and delicious fries" },
  {
    id: 3,
    name: "Drinks",
    description: "Refreshing drinks to quench your thirst",
  },
  // Add more categories as needed
];

const Menu = () => {
  return (
    <div className="bg-background">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-4 text-3xl font-bold text-primary">Menu</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-8">
              <h2 className="mb-2 text-xl font-bold">{category.name}</h2>
              <p className="mb-4 text-gray-500">{category.description}</p>
              <ul>{/* Render items for each category */}</ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
