import React, { Component, PropTypes } from 'react';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    const title = this.title.value;
    const ingredients = this.ingredients.value;
    this.props.onSubmit(title, ingredients);
  }

  render() {
    return (
      <div className="modal-background" onClick={() => this.props.onExit()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span
            className="exit-btn"
            onClick={() => this.props.onExit()}
          >
            &times;
          </span>
          <input
            className="input"
            ref={node => { this.title = node }}
            type="text"
            placeholder="recipe title"
          />
          <input
            className="input"
            ref={node => { this.ingredients = node }}
            type="text"
            placeholder="recipe,ingredients,separated,by,commas"
          />
          <button
            className="btn btn-secondary"
            onClick={() => this.handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

CreateRecipe.propTypes = {
  onSubmit: PropTypes.func,
  onExit: PropTypes.func,
};

export default CreateRecipe;
