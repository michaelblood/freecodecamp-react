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
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-12 my-5">
              <div className="modal-content card" onClick={(e) => e.stopPropagation()}>
                <span
                  role="button"
                  className="exit-btn btn btn-secondary"
                  onClick={() => this.props.onExit()}
                >
                  &times;
                </span>
                <h2 className="modal-header">New recipe</h2>
                <div className="card-block">
                  <div className="form-group">
                    <input
                      className="form-control"
                      ref={node => { this.title = node }}
                      type="text"
                      placeholder="recipe title"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      ref={node => { this.ingredients = node }}
                      type="text"
                      placeholder="recipe,ingredients,separated,by,commas"
                    />
                  </div>
                  <button
                    role="button"
                    className="btn btn-block btn-secondary submit-btn"
                    onClick={() => this.handleSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>

            </div>
          </div>
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
