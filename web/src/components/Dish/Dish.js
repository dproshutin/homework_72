import React from 'react';
import Button from "../UI/Button/Button";
import './Dish.css';

const Dish = props => {
    const altText = `Image of ${props.title} to be here...`;
    return (
        <div className="Dish">
            <div className="DishImageWrapper">
                <img src={props.photo} alt={altText}/>
            </div>
            <span>{props.title}</span>
            <span>{props.price}</span>
            <Button
                btnType="edit"
                click={() => props.editDish(props.id)}
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