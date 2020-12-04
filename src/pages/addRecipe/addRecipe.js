import React from 'react';
import AddForm from '../../components/form/addForm';
import styles from './addRecipe.module.css';

const AddRecipe = () => {

  return (
    <div id={styles.AddRecipe}>
        <div id={styles.area}></div>
        <AddForm />
    </div>
  );
}

export default AddRecipe;
