import React, {useState, useEffect} from 'react';

import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';

function Task () {
  const [allTodos, setAllTodos] = useState ([]);
  const [newTodoTitle, setNewTodoTitle] = useState ('');
  const [newDescription, setNewDescription] = useState ('');
  const [completedTodos, setCompletedTodos] = useState ([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState (false);


  const handleAddNewToDo = () => {
    let newToDoObj = {
      title: newTodoTitle,
      description: newDescription,
    };
    // console.log (newToDoObj);
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push (newToDoObj);
    // console.log (updatedTodoArr);
    setAllTodos (updatedTodoArr);
    localStorage.setItem ('todolist', JSON.stringify (updatedTodoArr));
    setNewDescription ('');
    setNewTodoTitle ('');
  };

  useEffect (() => {
    let savedTodos = JSON.parse (localStorage.getItem ('todolist'));
    let savedCompletedToDos = JSON.parse (
      localStorage.getItem ('completedTodos')
    );
    if (savedTodos) {
      setAllTodos (savedTodos);
    }

    if (savedCompletedToDos) {
      setCompletedTodos (savedCompletedToDos);
    }
  }, []);

  const handleToDoDelete = index => {
    let reducedTodos = [...allTodos];
    reducedTodos.splice (index,1);
    // console.log (index);

    // console.log (reducedTodos);
    localStorage.setItem ('todolist', JSON.stringify (reducedTodos));
    setAllTodos (reducedTodos);
  };

  const handleCompletedTodoDelete = index => {
    let reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice (index);
    // console.log (reducedCompletedTodos);
    localStorage.setItem (
      'completedTodos',
      JSON.stringify (reducedCompletedTodos)
    );
    setCompletedTodos (reducedCompletedTodos);
  };

  const handleComplete = index => {
    const date = new Date ();
    var dd = date.getDate ();
    var mm = date.getMonth () + 1;
    var yyyy = date.getFullYear ();
    var hh = date.getHours ();
    var minutes = date.getMinutes ();
    var ss = date.getSeconds ();
    var finalDate =
      dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

    let filteredTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };

    // console.log (filteredTodo);

    let updatedCompletedList = [...completedTodos, filteredTodo];
    console.log (updatedCompletedList);
    setCompletedTodos (updatedCompletedList);
    localStorage.setItem (
      'completedTodos',
      JSON.stringify (updatedCompletedList)
    );
    // console.log (index);

    handleToDoDelete (index);
  };

  return (
    <div >
      <h1 style={{fontSize:'50px'}}>My Task</h1>
      <hr/>

      <div className="todo-wrapper">

        <div className="todo-input">
        <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              value={newTodoTitle}
              onChange={e => setNewTodoTitle (e.target.value)}
              placeholder="What do you want to work on?"
              style={{width:'100%', padding:'10px 15px', color:'black'}}

            />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              value={newDescription}
              onChange={e => setNewDescription (e.target.value)}
              placeholder="What's the description of your task?"
              style={{width:'100%', padding:'10px 15px',color:'black'}}
            />
          </div>
          
          <div className="todo-input-item">
            <button
              className="primary-btn"
              type="button"
              onClick={handleAddNewToDo}
              style={{width:'100%', backgroundColor:'#000', borderRadius:'5px', padding:'10px 20px', marginTop:'10px'}}
             
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex justify-between" >
          <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen (false)}
          >
            To Do
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen (true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list flex justify-between">

          {isCompletedScreen === false &&
            allTodos.map ((item, index) => (
              <div className="todo-list-item  " key={index}>
                <div className='flex bg-black w-100'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                </div>
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleToDoDelete (index)}
                  />
                  <BsCheckLg
                    title="Completed?"
                    className=" check-icon"
                    onClick={() => handleComplete (index)}
                  />
                </div>
              </div>
            ))}

          {isCompletedScreen === true &&
            completedTodos.map ((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p> <i>Completed at: {item.completedOn}</i></p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleCompletedTodoDelete (index)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Task;