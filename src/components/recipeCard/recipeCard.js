import React from "react";
import styles from './recipeCard.module.css'

const RecipeCard = ({ name, photo, time, ingredients, recipe }) => {

    const filler = (text, char, tag) =>{
        if (tag==='list'){
            return text.split(char).join("\n").split('\n').map(str => <li>{str}</li>);
        }
        return text.split(char).join("\n").split('\n').map(str => <p>{str}</p>);
        
    }

    return (
        <div className={styles.card}>
            <h1 id={styles.name}>{name}</h1>
            <img id={styles.img} src={photo} alt=""/>
            <h3 id={styles.time} >{time} minutes to cook</h3>
            <ol id={styles.list}><b>Ingredients:</b> {filler(ingredients, ',', "list")}</ol>
            <p id={styles.recipe}><b>How to cook:</b> {filler(recipe, ';', "par")}</p>
        </div>
    );
};
export default RecipeCard;