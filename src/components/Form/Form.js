import React, { useState } from "react";
import { FormButton, FormColumnContainer, FormContainer, FormH2, FormInput, FormLabel } from './FormElements'


const Form = (props) => {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormColumnContainer>
                <FormH2>
                    <FormLabel htmlFor="new-todo-input">
                        What needs to be done
                    </FormLabel>
                </FormH2>
                </FormColumnContainer>
                
                <FormColumnContainer>
                    <FormInput
                        type="text"
                        id="new-todo-input"
                        name="text"
                        autoComplete="off"
                        value={name}
                        onChange={handleChange}>
                    </FormInput>
                    <FormButton type="submit">
                        Add
                    </FormButton>
                </FormColumnContainer>
            </form>
        </FormContainer >
    )
}

export default Form