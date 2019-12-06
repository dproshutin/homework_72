import React, {Component} from 'react';
import './AddDish.css';
import axios from '../../axios-homework-72';
import InputField from "../../components/UI/InputField/InputField";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

class AddDish extends Component {
    state = {
    };
    valueChanged = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };
    dishAddHandler = (event) => {
        this.setState({loading: true});
        const dish = {
            title: this.state.title,
            price: this.state.price,
            photo: this.state.photo
        };

        axios.post('/dishes.json', dish)
            .then(response => {
                if (response.statusText === "OK") {
                    this.setState({loading: false});
                    this.props.history.push('/');
                }
            })
    };
    dishCancelHandler = () => {
        this.props.history.push('/');
    };

    render() {
        if (this.state.loading) {
            return <Spinner/>;
        }
        return (
            <div className="AddDish">
                <h3>Add new dish</h3>
                <InputField
                    name="title"
                    type="text"
                    placeholder="Please add name of the dish"
                    title={this.state.title}
                    change={this.valueChanged}
                />
                <InputField
                    name="price"
                    type="text"
                    placeholder="Please add price of the dish"
                    title={this.state.price}
                    change={this.valueChanged}
                />
                <InputField
                    name="photo"
                    type="text"
                    placeholder="Please add path to the photo"
                    title={this.state.photo}
                    change={this.valueChanged}
                />
                <Button
                    btnType="delete"
                    click={this.dishCancelHandler}
                    value="Cancel"
                />
                <Button
                    btnType="read"
                    click={this.dishAddHandler}
                    value="Save"
                />
            </div>
        );
    }
}

export default AddDish;