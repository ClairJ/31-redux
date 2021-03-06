import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../actions/index.js';
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
            <CategoryList category={cat} />)
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
