import React from 'react';

const InputField = props => {
    return (
        <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={props.title}
            onChange={props.change}
            required
        />
    );
};

export default InputField;