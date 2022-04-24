import React, { useState } from "react";
import { Container, PageContainer, UnorderedList } from './components/Form/ContainerElements';
import Form from "./components/Form/Form";
import Todo from './components/todo/Todo';
import HistoryBut from './historybuttons/HistoryBut';
import { ButtonContainer } from './historybuttons/HistoryButElements';
import { nanoid } from "nanoid";
import RemainingTasks from "./components/RemainingTasks/RemainingTasks";
import { FormH2, FormLabel } from "./components/Form/FormElements";
import Fade from 'react-reveal/Fade';

// We are defining these constants outside our App() function because if they were defined inside it, they would be recalculated every time the <App /> component re-renders, and we don't want that. This information will never change no matter what our application does.
const FILTER_MAP = {
  //hows all tasks, so we return true for all tasks.
  All: () => true,
  //shows tasks whose completed prop is false.
  Active: task => !task.completed,
  //shows tasks whose completed prop is true.
  Completed: task => task.completed
};
//here we are using the Object.keys() method to collect an array of FILTER_NAMES:
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  //render all three of our filters.
  const filterList = FILTER_NAMES.map(name => (
    <HistoryBut
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;



  return (

    <Fade>
      <PageContainer>
        <Container>
          <Form addTask={addTask} />
          <FormH2>
          <FormLabel style={{ color: '#9dbeb7' }}>Filter tasks</FormLabel>
          </FormH2>
          <ButtonContainer>
            {filterList}
          </ButtonContainer>
          <RemainingTasks>
            {headingText}
          </RemainingTasks>
          <UnorderedList
            role="list"
            aria-labelledby="list-heading" >
            {taskList}
          </UnorderedList>
        </Container>
      </PageContainer>
      </Fade>
  
  );
}

export default App;
