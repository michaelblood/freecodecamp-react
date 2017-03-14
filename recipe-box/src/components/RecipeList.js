import React, { PropTypes } from 'react';

const RecipeList = ({ recipes, onClick }) => {
  return (
    <div className="col-md-6 col-sm-12 recipe-list">
      <h1>Recipes:</h1>
      <hr/>
      {recipes.map(recipe => (
        <div
          key={recipe.id}
          className="card my-1 recipe-list-item"
          onClick={() => onClick(recipe.id)}
        >
          <h3 className="card-header">{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
};

export default RecipeList;
