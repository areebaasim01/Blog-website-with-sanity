import React from "react";


const Recipe = () => {
  const recipes = [
    {
      title: "Easy One Pot Chicken Spaghetti",
      description: "A classic Italian Spaghetti dish made with eggs, cheese, pancetta, and pepper.",
      image: "spagethi.webp",
    },
    {
      title: "Tiktok Cinnamon Rolls",
      description: "Extra moist and fluffy cinnamon rolls that taste just like Cinnabon.",
      image: "tiktok.webp",
    },
    {
      title: "Perfect Spatchcock Turkey",
      description: "Spatchcock turkey is the answer flattening out the bird gives you juicy meat and crispy skin, every time.",
      image: "turkey.webp",
    },
    {
      title: "2 Minute Chocolate Mug Cake",
      description: "Mug cake is just so incredibly cozy!",
      image: "cake.webp",
    },
    {
      title: "Frozen Gummy Bears",
      description: "How to make adorable viral extra large frozen gummy bears.",
      image: "frozen.webp",
    },
    {
      title: "Big Mac Tacos (Smash Tacos)",
      description: "This mash up recipe is going to bring a smile to your face and a hum in your tum",
      image: "big.webp",
    },
    {
      title: "Roasted Honeynut Squash Creamy Pasta",
      description: "It is fall in a bowl: a warm and cozy creamy garlic pasta with pan-roasted honeynut squash.",
      image: "IAM.webp",
    },
    {
      title: "Swedish Meatballs",
      description: "Real deal Swedish meatballs, just like in Sweden.Super juicy and bursting with meaty flavor, served up with the creamiest mashed potatoes.",
      image: "kott.webp",
    },
    {
      title: "Takoyaki Recipe",
      description: "The ultimate Japanese street snack, now in your own home. Have a takoyaki party this weekend.",
      image: "tako.webp",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 py-[24px]">Our Recipes</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2">{recipe.description}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
