import './App.css';
import React, {useState} from 'react';

const App = () => {
  let [state, setState]=useState({
      addtask: '',
      isClick: false,
      taskList: [],
      checkbox: false
    });
    const addNewInput =(event) =>{
      const val =event.target.value;
      setState({...state, addtask: val});
    }
    const onSubmit = () => {
      setState({...state, isClick:true, taskList: [...state.taskList, state.addtask]});
      console.log(state.addtask, state.isClick);
    }
    const handleChangeChk = (i) => {
       state.taskList.map((index) => {
       if(index === i){
         setState({...state, checkbox: true});
       }})
    }
  return (
    <div className="main">
    <input type="text" placehoder="add new task" onChange={(event) => addNewInput(event)}/>
    <button onClick={onSubmit}>Submit</button>
    {state.isClick ? (
      state.taskList.map((ele, index) => {
      console.log('ele', ele);
      return (
      <div key={index} className="list">
      <input
      type="checkbox"
      defaultChecked={state.checkbox}
      onChange={() => handleChangeChk(index)}
      />
      {ele}
      </div>
      )
      })
    ) : null}
    </div>
  );
}

export default App;
