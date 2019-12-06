import React from 'react';
import Button from "../UI/Button/Button";
import './Dish.css';

const Dish = props => {
    return (
        <div className="Dish">
            <div className="DishImageWrapper">
                <img src={props.photo} alt={props.title}/>
            </div>
            <span>{props.title}</span>
            <span>{props.price}</span>
            <Button
                btnType="edit"
                // click={this.props.editDish}
                value="Edit"
            />
            <Button
                btnType="delete"
                click={() => props.removeDish(props.id)}
                value="Delete"
            />
        </div>
    );
};

export default Dish;