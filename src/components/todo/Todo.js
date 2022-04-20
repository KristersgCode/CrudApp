import React, { useState } from "react";
import { ButtonDelete, ButtonEdit } from '../../ButtonElements'
import { FormButton, FormColumnContainer, FormContainer, FormInput, FormLabel } from "../Form/FormElements";
import { CheckBoxContainer, InputTodo, Label, ListTodo, ButtonContainer } from './TodoElements'

const Todo = (props) => {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    //function that will set the new name for edit task
    function handleChange(e) {
        setNewName(e.target.value);
    }

    //function to handle the edit form's onSubmit event;
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <FormContainer>
            <form onSubmit={handleSubmit}>

                <FormLabel htmlFor={props.id}>
                    New name for {props.name}
                </FormLabel>


                <FormColumnContainer>
                    <FormInput
                        id={props.id}
                        type="text"
                        value={newName}
                        onChange={handleChange}>
                    </FormInput>
                    <FormButton type="submit"
                        onClick={() => setEditing(false)}>
                        Cancel
                    </FormButton>

                    <FormButton type="submit">
                        <span>Save</span>
                    </FormButton>
                </FormColumnContainer>
            </form>
        </FormContainer >

    );

    const viewTemplate = (
        <ListTodo>
            <CheckBoxContainer>
                <InputTodo
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <Label htmlFor={props.id}>
                    {props.name}
                </Label>
            </CheckBoxContainer>
            <ButtonContainer>
                <ButtonEdit type='button' onClick={() => setEditing(true)}>
                    Edit <span>{props.name} </span>
                </ButtonEdit>

                <ButtonDelete type='button'
                    onClick={() => props.deleteTask(props.id)}>
                    Delete <span>{props.name}</span>
                </ButtonDelete>
            </ButtonContainer>
        </ListTodo>

    );

    return (
        <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>

    )
}
{/* <ListTodo>
        <CheckBoxContainer>
            <InputTodo
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
            />
            <Label htmlFor={props.id}>
                {props.name}
            </Label>
        </CheckBoxContainer>

        <ButtonContainer>
            <ButtonEdit type='button'>
                Edit
            </ButtonEdit>

            <ButtonDelete type='button'
                onClick={() => props.deleteTask(props.id)}>
                Delete
            </ButtonDelete>
        </ButtonContainer>
    </ListTodo> */}


export default Todo
