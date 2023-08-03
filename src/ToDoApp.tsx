import React from "react";
import { useState } from "react";
import './sass/ToDoStyles.scss'; 

function ToDoApp() {
  const [addedTodo, setAddedTodo] = useState([]);
  const [newTodo, setNewTodo] :any= useState();

  const handleNewTodo = (e:any) => {
    console.log(e)
    let value = e.target.value;
    let length = addedTodo.length; 
    let obj:any ={value:value, id:length+1}
    setNewTodo(obj);
  };

  const addTodo = () =>{
    const val:any = newTodo['value']
    if(!newTodo || !val) return null; 
    let _new= [...addedTodo].concat(newTodo)
    setAddedTodo(_new) 
    setNewTodo('')
  }

  const handleKeyUp = (e:any) =>{
if(e?.keyCode === 13) addTodo()
  }

  const clearAll = () =>{
    setAddedTodo([])
  }

  const removeItem = (e:any) =>{
    console.log(e)
    let _new = [...addedTodo].filter((i:any)=>i.id !== e.id)
    setAddedTodo(_new)
  }

  console.log(newTodo, addedTodo)
  return (
    <div
    
      className="main_container"
    >
      <h2>
        todo app
      </h2>
      <div>
        <input
         
          onChange={handleNewTodo}
          placeholder="Add your new todo"
          value={newTodo? newTodo.value: ''}
      onKeyUp={handleKeyUp}
          
        ></input>{" "}
        <span onClick={addTodo}><button className="add_btn">+</button></span>
      </div>

      <div className="list_container" >
        <ul>

        {addedTodo.map((i:any)=>{
                return   <div
              >
               
                <li
                  
                >
              {i.value}
                </li>
                <span className="cross" 
                 onClick={(e)=>removeItem(i)}>&times;</span>
              </div>
            })}

        </ul>
      </div>

      <div className="clear_all"
        
      >
        {addedTodo.length > 0 && <button onClick={clearAll}>clear all</button>}
      </div>
    </div>
  );
}

export default ToDoApp;
