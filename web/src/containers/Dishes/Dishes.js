import React, {Component} from 'react';
import './Dishes.css';
import Button from "../../components/UI/Button/Button";
import {connect} from "react-redux";
import Dish from "../../components/Dish/Dish";
import {loadDishes, removeDish} from "../../store/actions/actions";
import Spinner from "../../components/UI/Spinner/Spinner";

class Dishes extends Component {
    componentDidMount() {
        this.props.loadDishes();
    }

    render() {
        if (this.props.loading) {
            return <Spinner/>
        }
        let body = ((this.props.allDishes.length) > 0) ?
            this.props.allDishes.map(dish => {
                return (
                    <Dish
                        key={dish.id}
                        id={dish.id}
                        title={dish.title}
                        price={dish.price}
                        photo={dish.photo}
                        // editDish={this.props.editDish}
                        removeDish={this.props.removeDish}
                    />
                );
            })
            : <p>There are no dishes yet...</p>;
        return (
            <>
                <div className="DishHeader">
                    <h3>Dishes</h3>
                    <Button
                        btnType="add"
                        click={this.props.addDishHandler}
                        value="Add new Dish"
                    />
                </div>
                <div className="DishBody">
                    {body}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        allDishes: state.dishes.dishes,
        loading: state.dishes.loading
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadDishes: () => dispatch(loadDishes()),
        removeDish: (id) => dispatch(removeDish(id)),
        addDishHandler: () => ownProps.history.push('/dishes/add')
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);