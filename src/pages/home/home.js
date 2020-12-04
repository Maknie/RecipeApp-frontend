import React, { useEffect, useState } from 'react';
import RecipeCard from '../../components/recipeCard/recipeCard';
import styles from './home.module.css'

const Home = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`http://localhost:3012/recipes`);
      const data = await response.json();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  return (
    <div id={styles.homePage}>
      <div id={styles.recipes}>
      {recipes.map(recipe =>
          <RecipeCard key={recipe.photo}
            name={recipe.name}
            photo={recipe.photo}
            time={recipe.time}
            ingredients={recipe.ingredients}
            recipe={recipe.recipe}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
