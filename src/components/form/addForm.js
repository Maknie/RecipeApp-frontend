import React from 'react';
import styles from './addForm.module.css';
import axios from 'axios'

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
        verified: false,
        name: '',
        photo: '',
        time: '',
        ingredients: '',
        recipe: '',
    }

}

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
  this.setState({ apartment: this.props.apartment_name })
}

submitHandler = (e) => {
  if (!this.state.name || !this.state.recipe) {
      alert("Please fill all the fields")
  } else {
    e.preventDefault()
    axios.post('http://localhost:3012/recipes', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    this.setState({
        isVerified: false,
        name: '',
        photo: '',
        time: '',
        ingredients: '',
        recipe: '',
    });
    alert('Your message was successfully sent')
  }
}

  render(){
    const { name, photo, time, ingredients, recipe } = this.state

    return (
      <div id={styles.AddForm}>
          <form id={styles.form} onSubmit={this.submitHandler}>
              <input 
                className={styles.recipeText}
                type="text"
                name="name" 
                value={name}
                placeholder="Name" 
                onChange={this.changeHandler}/>
              <input 
                className={styles.recipeText}
                type="text" 
                name="photo" 
                value={photo}
                placeholder="Link to the photo" 
                onChange={this.changeHandler}/>
              <textarea 
                className={styles.recipeText} 
                rows="5"
                type="text" 
                name="ingredients" 
                value={ingredients}
                placeholder="List of ingredients" 
                onChange={this.changeHandler}/>
              <input 
                className={styles.recipeText}
                type="number" 
                name="time" 
                value={time}
                placeholder="Time to cook" 
                onChange={this.changeHandler}/>
              <textarea 
                className={styles.recipeText} 
                name="recipe" 
                value={recipe} 
                rows="10" 
                placeholder="Recipe" 
                onChange={this.changeHandler}/>
              <input id={styles.submitBtn} type="submit" value="Send"/>
          </form>
      </div>
    );
  }
}

export default AddForm;
