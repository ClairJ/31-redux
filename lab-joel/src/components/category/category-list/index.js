import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils.js';
import CategoryForm from '../category-form/index.js';
import {categoryUpdate, categoryDelete} from '../../../actions/index.js';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category ? this.props.category
        : undefined,
      updating: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.CategoryListCategoryDelete(this.state);
  }
  render() {
    return(
      <section>
        <div
          key={this.props.category._id}
          onDoubleClick={() => this.setState({updating: !this.state.updating})}>
          <p>{this.props.category.title}</p>
          <p>${this.props.category.budget}</p>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        {renderIf(this.state.updating,
          <CategoryForm
            category={this.props.category}
            buttonText='update'
            onComplete={this.props.categoryListUpdate}/>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryListUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
