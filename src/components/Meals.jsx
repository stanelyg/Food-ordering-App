import React from 'react'
import { useEffect, useState } from 'react'
import MealItem from './MealItem'
import useHttp from '../hooks/useHttp.js'
import Error from './UI/Error.jsx'
const requestConfig = {}
const Meals = () => {
  const { data: meals, isLoading, error, sendRequest } = useHttp('http://localhost:3000/meals', requestConfig, []);
  if (isLoading) {
    return <section id='meals'><p>Loading meals...</p></section>;
  }
  if (error) {
    return <Error title='Error' message={error} />;
  }
  

  return (
    <ul id='meals'>
      {meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals