import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryDelete} from '../../actions/category-action.js';
import CategoryForm from '../category/category-form/index.js';
import CategoryList from '../category/category-list/index.js';

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Welcome to my KanBan Board</h1>

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(cat =>
            <CategoryList key={cat._id}
              category={cat}
              handleDelete={this.props.dashboardCategoryDelete}
            />)
          :
          undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
  dashboardCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
