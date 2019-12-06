import React, {Component} from 'react';
import './Dishes.css';
import Button from "../../components/UI/Button/Button";

class Dishes extends Component {
    addDishHandler = () => {
        this.props.history.push({
            pathname: '/dishes/add'
        });
    };

    render() {
        return (
            <div className="DishHeader">
                <h3>Dishes</h3>
                <Button
                    btnType="add"
                    click={this.addDishHandler}
                    value="Add new Dish"
                />
            </div>
        );
    }
}

export default Dishes;