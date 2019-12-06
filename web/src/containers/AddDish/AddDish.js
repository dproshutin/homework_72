import React, {Component} from 'react';
import './AddDish.css';
import InputField from "../../components/UI/InputField/InputField";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import {connect} from "react-redux";
import {addNewDish, valueChanged} from "../../store/actions/actions";

class AddDish extends Component {
    render() {
        if (this.props.loading) {
            return <Spinner/>;
        }
        return (
            <div className="AddDish">
                <h3>Add new dish</h3>
                <InputField
                    name="title"
                    type="text"
                    placeholder="Please add name of the dish"
                    title={this.props.newDish.title}
                    change={this.props.valueChanged}
                />
                <InputField
                    name="price"
                    type="text"
                    placeholder="Please add price of the dish"
                    title={this.props.newDish.price}
                    change={this.props.valueChanged}
                />
                <InputField
                    name="photo"
                    type="text"
                    placeholder="Please add path to the photo"
                    title={this.props.newDish.photo}
                    change={this.props.valueChanged}
                />
                <Button
                    btnType="delete"
                    click={this.props.cancelOrder}
                    value="Cancel"
                />
                <Button
                    btnType="read"
                    click={this.props.addNewDish}
                    value="Save"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        newDish: state.addDish.newDish,
        loading: state.addDish.loading
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        valueChanged: (e) => dispatch(valueChanged(e)),
        addNewDish: () => dispatch(addNewDish({history: ownProps.history})),
        cancelOrder: () => ownProps.history.push('/')
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (AddDish);