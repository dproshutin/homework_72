import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem to="/dishes" exact>
                Dishes
            </NavigationItem>
            <NavigationItem to="/orders" exact>
                Orders
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;